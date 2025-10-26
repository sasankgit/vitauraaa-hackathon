import React, { useState } from 'react';
import { Upload, Camera, AlertCircle, CheckCircle, Loader2, X, Brain } from 'lucide-react';
import { supabase} from '../supabase';



export default function Fun() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setError('');
    }
  };

  const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const analyzeImageWithGemini = async (base64Image) => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Analyze this civic infrastructure image and identify the problem. Respond ONLY with one of these exact categories:
- "CRACKED_PIPE" if the image shows a broken, cracked, or damaged water/drainage pipe
- "POTHOLE" if the image shows a pothole or road damage
- "OTHER" if it's something else

Be very precise. Only respond with the category name, nothing else.`
                  },
                  {
                    inline_data: {
                      mime_type: selectedImage.type,
                      data: base64Image
                    }
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'Failed to analyze image');
      }

      const analysis = data.candidates[0]?.content?.parts[0]?.text?.trim();
      return analysis;
    } catch (err) {
      console.error('Gemini API Error:', err);
      throw new Error('Failed to analyze image with AI');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedImage) {
      setError('Please select an image');
      return;
    }

    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    setAnalyzing(true);

    try {
      const base64Image = await imageToBase64(selectedImage);
      const aiAnalysis = await analyzeImageWithGemini(base64Image);
      
      setAnalyzing(false);

      const fileExt = selectedImage.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('usersentpics')
        .upload(filePath, selectedImage, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      const { data: { publicUrl } } = supabase.storage
        .from('usersentpics')
        .getPublicUrl(filePath);

      const { data: dbData, error: dbError } = await supabase
        .from('civic_reports')
        .insert([
          {
            image_url: publicUrl,
            image_path: filePath,
            description: description || null,
            location: location,
            ai_classification: aiAnalysis,
            status: 'pending'
          }
        ])
        .select();

      if (dbError) {
        throw new Error(`Database error: ${dbError.message}`);
      }

      setSuccess('Report submitted successfully! Analyzing and routing...');

      setTimeout(() => {
        if (aiAnalysis?.includes('CRACKED_PIPE')) {
          setRedirectUrl('/municipality');
          window.location.href = '/municipality';
        } else if (aiAnalysis?.includes('POTHOLE')) {
          setRedirectUrl('/roadauthority');
          window.location.href = '/roadauthority';
        } else {
          setError('Unable to classify the issue. Please try a clearer image or contact support.');
          setLoading(false);
        }
      }, 1500);

    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to submit report. Please try again.');
      setLoading(false);
      setAnalyzing(false);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-4">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Report an Issue</h1>
          <p className="text-lg text-slate-600">Upload a photo and our AI will route it to the right department</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Upload Photo <span className="text-red-500">*</span>
              </label>
              
              {!imagePreview ? (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-slate-400 group-hover:text-blue-500 mb-3" />
                    <p className="mb-2 text-sm text-slate-600">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-slate-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageSelect}
                    disabled={loading}
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-2xl border-2 border-slate-200"
                  />
                  <button
                    type="button"
                    onClick={clearImage}
                    disabled={loading}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition disabled:opacity-50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Main Street near City Hall"
                disabled={loading}
                className="w-full px-4 py-3 border-2 text-black border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none disabled:bg-slate-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Additional Details (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the issue in more detail..."
                rows="4"
                disabled={loading}
                className="w-full px-4 py-3 border-2 text-black border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none disabled:bg-slate-50 disabled:cursor-not-allowed"
              />
            </div>

            {error && (
              <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm text-green-700">{success}</p>
              </div>
            )}

            {analyzing && (
              <div className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <Brain className="w-5 h-5 text-blue-500 animate-pulse flex-shrink-0" />
                <p className="text-sm text-blue-700">AI is analyzing your image...</p>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading || !selectedImage || !location.trim()}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  <span>Submit Report</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-blue-600" />
            How it works
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">1.</span>
              Upload a clear photo of the civic issue
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">2.</span>
              Our AI analyzes and classifies the problem
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">3.</span>
              Report is automatically routed to the correct department
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">4.</span>
              You'll be redirected to track your report status
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}