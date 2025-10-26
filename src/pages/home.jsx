import React, { useState } from "react";
import { Brain, Zap, MapPin, Users, MessageCircle, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function CivicSenseHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800 transition-all">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              CivicSense
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <Link to="/fun">
              <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-sm hover:shadow-lg transition">
                Get Started
              </button>
            </Link>
            <Link to="/display">
              <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-sm hover:shadow-lg transition">
                display reports
              </button>
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-white border-t border-slate-200 md:hidden px-6 py-4 space-y-3">
            <a href="#about" className="block hover:text-blue-600">About</a>
            <a href="#features" className="block hover:text-blue-600">Features</a>
            <Link to="/fun">
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4 text-slate-900">
          Empowering Smarter Communities with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            AI Assistance
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          CivicSense helps communities identify, report, and resolve civic issues faster — 
          connecting citizens and local authorities through intelligent automation.
        </p>
        <Link to="/fun">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition">
            Report an Issue
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">About CivicSense</h2>
        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
          CivicSense is a digital bridge between people and their cities. It uses 
          artificial intelligence to understand public issues — like broken streetlights, 
          potholes, or waste management — and ensures that every report reaches the 
          right department efficiently. By simplifying communication and automating 
          workflows, CivicSense makes cities more responsive, transparent, and citizen-friendly.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-b from-blue-50 to-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Zap />, title: "AI-Powered Insights", desc: "Understands reports through text and image analysis." },
            { icon: <MapPin />, title: "Smart Routing", desc: "Sends reports directly to the right civic department." },
            { icon: <Users />, title: "Citizen Friendly", desc: "Makes issue reporting easy and transparent." },
            { icon: <Brain />, title: "Self-Learning System", desc: "Improves continuously with new data and feedback." }
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Message Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Together for a Better Tomorrow</h2>
        <p className="max-w-2xl mx-auto text-blue-50 text-lg leading-relaxed">
          By connecting people, data, and technology, CivicSense empowers citizens to 
          shape cleaner, safer, and more efficient cities.  
          Every small report brings us closer to a smarter community.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-500 py-10 text-center border-t border-slate-200">
        <p>© 2025 CivicSense. All rights reserved.</p>
      </footer>

      {/* Floating Chatbot */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white flex justify-between items-center">
            <span className="font-semibold">Ask CivicSense</span>
            <button onClick={() => setChatOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-48 overflow-y-auto bg-slate-50">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-slate-700">
                Hi! I’m here to help. Ask me anything about CivicSense!
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-slate-200">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}
