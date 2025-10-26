import React, { useEffect, useState } from "react";
import { supabase } from "../supabase"; // adjust the path to your supabase.js
import { Loader2, MapPin, Brain } from "lucide-react";

export default function ReportsReceived() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      try {
        const { data, error } = await supabase
          .from("civic_reports")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setReports(data);
      } catch (err) {
        console.error("Error fetching reports:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Reports Received
        </h1>
        <p className="text-slate-600">
          Here’s a list of all civic issues submitted through CivicSense.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      ) : reports.length === 0 ? (
        <p className="text-center text-slate-500 text-lg">
          No reports available yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-slate-100"
            >
              <img
                src={report.image_url}
                alt="Report"
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      report.status === "resolved"
                        ? "bg-green-100 text-green-600"
                        : report.status === "in-progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {report.status}
                  </span>
                  <span className="text-xs text-slate-400">
                    {new Date(report.created_at).toLocaleString()}
                  </span>
                </div>
                <p className="text-slate-800 font-medium mb-2">
                  {report.description || "No description provided."}
                </p>

                <div className="flex items-center text-slate-600 text-sm mb-1">
                  <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                  <span>{report.location}</span>
                </div>

                <div className="flex items-center text-slate-600 text-sm">
                  <Brain className="w-4 h-4 mr-1 text-cyan-500" />
                  <span>{report.ai_classification}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
