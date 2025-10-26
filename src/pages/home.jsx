import React, { useState, useEffect } from 'react';
import { Upload, Brain, Zap, Users, CheckCircle, TrendingUp, MapPin, Clock, Award, ArrowRight, Menu, X, MessageCircle } from 'lucide-react';
import {Link} from 'react-router-dom'

export default function CivicSenseHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Animated counters
  const [stats, setStats] = useState({
    speed: 0,
    reports: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (statsVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      const targets = { speed: 90, reports: 50, satisfaction: 70 };
      let current = { speed: 0, reports: 0, satisfaction: 0 };

      const interval = setInterval(() => {
        current.speed = Math.min(current.speed + targets.speed / steps, targets.speed);
        current.reports = Math.min(current.reports + targets.reports / steps, targets.reports);
        current.satisfaction = Math.min(current.satisfaction + targets.satisfaction / steps, targets.satisfaction);

        setStats({
          speed: Math.floor(current.speed),
          reports: Math.floor(current.reports),
          satisfaction: Math.floor(current.satisfaction)
        });

        if (current.speed >= targets.speed) clearInterval(interval);
      }, increment);

      return () => clearInterval(interval);
    }
  }, [statsVisible]);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Vision + Text Understanding",
      description: "Advanced AI analyzes images and text to understand citizen complaints with human-like comprehension."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Priority Scoring",
      description: "Intelligent algorithms assess urgency and impact, ensuring critical issues get immediate attention."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Smart Department Routing",
      description: "Reports are instantly directed to the right municipal department, eliminating manual sorting."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-in-the-Loop Review",
      description: "AI recommendations with human oversight ensure accuracy and maintain public trust."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CivicSense AI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#how" className="text-slate-600 hover:text-blue-600 transition">How It Works</a>
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition">Features</a>
              <a href="#impact" className="text-slate-600 hover:text-blue-600 transition">Impact</a>
              <a href="#demo" className="text-slate-600 hover:text-blue-600 transition">Demo</a>
              <Link to ='/fun'>
              <button  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg transition">
                Get Started
              </button>
              </Link>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#how" className="block text-slate-600 hover:text-blue-600">How It Works</a>
              <a href="#features" className="block text-slate-600 hover:text-blue-600">Features</a>
              <a href="#impact" className="block text-slate-600 hover:text-blue-600">Impact</a>
              <a href="#demo" className="block text-slate-600 hover:text-blue-600">Demo</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Smarter Cities Start With{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Smarter Reports
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto">
              AI that listens, understands, and routes citizen issues in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Report an Issue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold hover:shadow-lg transition border-2 border-slate-200">
                See It in Action
              </button>
            </div>
          </div>

          {/* Floating Network Nodes */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition animate-pulse" style={{animationDelay: `${i * 0.3}s`}}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-3"></div>
                <div className="h-2 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-slate-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Three simple steps to transform civic engagement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Upload />, title: "Upload", desc: "Citizens submit reports with photos and descriptions through any channel" },
              { icon: <Brain />, title: "AI Classification", desc: "Computer vision and NLP analyze content and categorize issues instantly" },
              { icon: <Zap />, title: "Instant Routing", desc: "Reports are prioritized and sent to the right department automatically" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-2">STEP {i + 1}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600">Built for scale, designed for impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:border-blue-200 transition group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Impact, Real Results</h2>
            <p className="text-xl text-blue-100">Transforming municipalities across the nation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-2">{stats.speed}%</div>
              <div className="text-xl text-blue-100">Faster Triage</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-2">{stats.reports}K+</div>
              <div className="text-xl text-blue-100">Reports Processed</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-2">{stats.satisfaction}%</div>
              <div className="text-xl text-blue-100">Citizen Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">See It In Action</h2>
            <p className="text-xl text-slate-600">Live dashboard with real-time ticket tracking</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="space-y-4">
              {[
                { id: "#4721", type: "Pothole", status: "Routed", dept: "Public Works", priority: "High" },
                { id: "#4722", type: "Street Light", status: "Processing", dept: "Utilities", priority: "Medium" },
                { id: "#4723", type: "Garbage", status: "Classified", dept: "Sanitation", priority: "Low" }
              ].map((ticket, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-blue-500 transition">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-400 font-mono font-bold">{ticket.id}</div>
                      <div className="text-white font-medium">{ticket.type}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ticket.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                        ticket.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-slate-400 text-sm">{ticket.dept}</div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm">{ticket.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ready to Transform Your City?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Join leading municipalities using AI to serve citizens better, faster, and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition text-lg">
              Partner With Us
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold hover:shadow-lg transition border-2 border-slate-200 text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">CivicSense AI</span>
              </div>
              <p className="text-slate-400">Empowering smarter cities through intelligent automation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Partner Municipalities</h4>
              <div className="flex flex-wrap gap-2">
                {['NYC', 'LA', 'CHI', 'MIA'].map(city => (
                  <div key={city} className="px-3 py-1 bg-slate-800 rounded-lg text-sm">{city}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2025 CivicSense AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <button 
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Ask CivicSense</span>
              <button onClick={() => setChatOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4 h-64 bg-slate-50">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
              <p className="text-sm text-slate-700">Hi! I'm here to help. Ask me anything about CivicSense AI!</p>
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