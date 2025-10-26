import React, { useState } from "react";
// Re-using some icons and adding new ones for the new theme
import { Brain, MapPin, Users, MessageCircle, X, Menu, CheckCircle, CloudSun } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from '../supabase'; // Assuming supabase is correctly imported

// --- Logout Function (Copied exactly as requested) ---
async function Handlelogout() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error logging out:', error.message);
      // Optionally: Show an error message to the user
    } else {
      console.log('User logged out successfully');
      // Optionally: Redirect the user to the login page or homepage
      // window.location.href = '/login'; 
    }
  } catch (err) {
    console.error('An unexpected error occurred:', err.message);
  }
}

// --- New Homepage Component ---
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 ">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-sky-100 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              CivicSense
            </span>
          </div>

          {/* Desktop Nav Links & Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-slate-600 hover:text-sky-600 transition">About</a>
            <a href="#features" className="text-slate-600 hover:text-sky-600 transition">Features</a>
            
            {/* --- Links and Logout (Kept as requested) --- */}
            <Link to="/fun">
              <button className="px-5 py-2 bg-sky-600 text-white rounded-full shadow-sm hover:bg-sky-700 transition">
                Get Started
              </button>
            </Link>
            <Link to="/display">
              <button className="px-5 py-2 bg-sky-100 text-sky-700 rounded-full shadow-sm hover:bg-sky-200 transition">
                View Reports
              </button>
            </Link>
            <button
              onClick={Handlelogout}
              className="px-5 py-2 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-full shadow-sm hover:shadow-lg transition">
              Logout
            </button>
            {/* --- End of preserved links --- */}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-700">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="bg-white border-t border-sky-100 md:hidden px-6 py-4 space-y-3">
            <a href="#about" className="block text-slate-600 hover:text-sky-600" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#features" className="block text-slate-600 hover:text-sky-600" onClick={() => setMenuOpen(false)}>Features</a>
            <div className="pt-2 space-y-2">
              <Link to="/fun">
                <button className="w-full px-6 py-2 bg-sky-600 text-white rounded-full">
                  Get Started
                </button>
              </Link>
              <Link to="/display">
                <button className="w-full px-6 py-2 bg-sky-100 text-sky-700 rounded-full">
                  View Reports
                </button>
              </Link>
              <button
                onClick={Handlelogout}
                className="w-full px-6 py-2 bg-pink-600 text-white rounded-full">
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              <CloudSun className="w-4 h-4" />
              <span>A brighter tomorrow, today</span>
            </span>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              A Clearer Sky for Your City
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 mb-8">
              CivicSense helps you report local issues with ease, connecting you
              to the right people and creating a brighter, more responsive community.
            </p>
            <Link to="/fun">
              <button className="px-8 py-3 bg-sky-600 text-white rounded-full font-semibold shadow-lg hover:bg-sky-700 hover:shadow-xl transition text-lg">
                Report an Issue
              </button>
            </Link>
          </div>
          {/* Hero Image Placeholder */}
          <div className="flex items-center justify-center">
             {/* You can place an illustration or image here */}
             <div className="w-full h-80 bg-gradient-to-br from-sky-200 to-cyan-100 rounded-3xl shadow-xl flex items-center justify-center">
                {/*  */}
                <span className="text-sky-600 font-medium">Your Community Illustration Here</span>
             </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">What is CivicSense?</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            CivicSense is the direct line between you and your local government.
            We use smart technology to instantly categorize your reports—from potholes
            to broken park benches—and send them directly to the department
            in charge. No more guessing who to call. Just simple, transparent,
            and effective civic action.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-sky-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <CheckCircle />, title: "Easy Reporting", desc: "Quickly submit issues with photos and descriptions." },
            { icon: <MapPin />, title: "Smart Geo-Routing", desc: "Your report is automatically sent to the correct local authority." },
            { icon: <Users />, title: "Community Powered", desc: "See other reports in your area and track progress together." }
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-sky-100 border border-sky-100 transition-all"
            >
              <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-5">
                {React.cloneElement(f.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Join Your Neighbors. Make a Difference.</h2>
        <p className="max-w-2xl mx-auto text-sky-50 text-lg leading-relaxed mb-8">
          Every report, big or small, contributes to a safer, cleaner,
          and more efficient community. Get started in minutes.
        </p>
        <Link to="/fun">
          <button className="px-8 py-3 bg-white text-sky-600 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition text-lg">
            Submit Your First Report
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-sky-200 py-10 text-center">
        <p className="text-slate-400">© 2025 CivicSense. All rights reserved.</p>
      </footer>

      {/* --- Floating Chatbot (Skyblue Theme) --- */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-sky-600 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 hover:bg-sky-700 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-sky-100 overflow-hidden z-50 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-600 to-cyan-500 p-4 text-white flex justify-between items-center">
            <span className="font-semibold">Ask CivicSense</span>
            <button onClick={() => setChatOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Body */}
          <div className="p-4 h-48 overflow-y-auto bg-sky-50">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-slate-700">
                Hi! I’m here to help. Ask me anything about CivicSense!
              </p>
            </div>
          </div>
          {/* Input */}
          <div className="p-4 border-t border-sky-100 bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-sky-300 rounded-full focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Add this to your tailwind.config.js for the simple animation
/*
theme: {
  extend: {
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.3s ease-out',
    },
  },
},
*/