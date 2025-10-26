import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import {
  Menu,
  X,
  AlertTriangle,
  FileText,
  Camera,
  Cpu,
  History,
  CheckCircle,
  Clock,
  Users,
  Move,
  LightbulbOff,
  Paintbrush,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [stats, setStats] = useState({ reports: 120, users: 45, resolved: 80 });

  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Failed to logout. Try again.");
    }
  }

  // Animate counters
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        reports: Math.min(prev.reports + Math.floor(Math.random() * 3), 500),
        users: Math.min(prev.users + Math.floor(Math.random() * 2), 200),
        resolved: Math.min(prev.resolved + Math.floor(Math.random() * 2), 400),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Floating background shapes
  useEffect(() => {
    const shapes = Array.from({ length: 20 }).map(() => {
      const el = document.createElement("div");
      el.className =
        "absolute w-8 h-8 bg-purple-300 rounded-full opacity-30 animate-float";
      el.style.top = `${Math.random() * 100}vh`;
      el.style.left = `${Math.random() * 100}vw`;
      el.style.animationDuration = `${5 + Math.random() * 10}s`;
      document.body.appendChild(el);
      return el;
    });

    return () => shapes.forEach((el) => document.body.removeChild(el));
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/abc.png')" }}
      />
      {/* Purple overlay for contrast */}
      <div className="absolute inset-0 -z-5 bg-purple-700/50" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/20 shadow-md backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-purple-100">CivicAI Reporter</h1>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/fun"
            className="hover:text-white hover:bg-purple-500 transition px-4 py-2 rounded-lg shadow-md font-semibold flex items-center gap-2"
          >
            <AlertTriangle size={20} /> Report Problem
          </Link>
          <Link
            to="/display"
            className="hover:text-white hover:bg-purple-500 transition px-4 py-2 rounded-lg shadow-md font-semibold flex items-center gap-2"
          >
            <FileText size={20} /> View Reports
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-white hover:bg-red-500 transition px-4 py-2 rounded-lg shadow-md font-semibold"
          >
            Logout new
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-100 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white/20 shadow-lg px-6 py-4 space-y-3 backdrop-blur-sm">
          <Link
            to="/fun"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white hover:bg-purple-500 transition px-4 py-2 rounded-lg shadow-md font-semibold"
          >
            Report Problem
          </Link>
          <Link
            to="/display"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white hover:bg-purple-500 transition px-4 py-2 rounded-lg shadow-md font-semibold"
          >
            View Reports
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="text-red-400 hover:text-white hover:bg-red-500 transition px-4 py-2 rounded-lg shadow-md font-semibold text-left"
          >
            Logout
          </button>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex-grow relative z-10">
        <section className="flex flex-col items-center justify-center text-center px-6 py-32 min-h-screen animate-fadeIn">
          <h2 className="text-5xl font-extrabold mb-6 text-blue-600 drop-shadow-lg">
            AI-Based Civic Problem Reporting explaining ibrahim
          </h2>
          <p className="max-w-3xl text-lg mb-10 animate-bounce">
            Empower citizens to report civic issues like potholes, broken streetlights, and sanitation problems.
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <Link
              to="/fun"
              className="flex items-center justify-center gap-2 bg-red-200 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-purple-500/50"
            >
              <AlertTriangle size={20} /> Report a Problem
            </Link>

            <Link
              to="/display"
              className="flex items-center justify-center gap-2 bg-red-200 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-emerald-500/50"
            >
              <FileText size={20} /> View Reports
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-purple-800/40 backdrop-blur-sm">
          <h3 className="text-4xl font-bold mb-12 text-center">Community Stats</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white/20 rounded-2xl shadow-lg p-8 w-64 text-center transform hover:scale-105 transition">
              <CheckCircle size={36} className="mx-auto text-purple-300 mb-4" />
              <h4 className="text-3xl font-bold">{stats.reports}</h4>
              <p className="mt-2">Reports Submitted</p>
            </div>
            <div className="bg-white/20 rounded-2xl shadow-lg p-8 w-64 text-center transform hover:scale-105 transition">
              <Users size={36} className="mx-auto text-purple-300 mb-4" />
              <h4 className="text-3xl font-bold">{stats.users}</h4>
              <p className="mt-2">Active Users</p>
            </div>
            <div className="bg-white/20 rounded-2xl shadow-lg p-8 w-64 text-center transform hover:scale-105 transition">
              <Clock size={36} className="mx-auto text-purple-300 mb-4" />
              <h4 className="text-3xl font-bold">{stats.resolved}</h4>
              <p className="mt-2">Issues Resolved</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Camera, title: "AI Detection", desc: "Automatically identify and categorize issues." },
            { icon: Cpu, title: "Smart Dashboard", desc: "Interactive view of all community reports." },
            { icon: Paintbrush, title: "Visual Feedback", desc: "Mark issues with photos and drawings." },
            { icon: Move, title: "Track Progress", desc: "Monitor issues in real-time." },
            { icon: History, title: "Audit Trail", desc: "Keep logs of all reports and actions." },
            { icon: LightbulbOff, title: "Community Tips", desc: "Get suggestions for solving local issues." },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/20 rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition"
            >
              <feature.icon size={36} className="mx-auto text-purple-300 mb-4" />
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </section>

        <div className="h-[50vh]" />
      </main>

      {/* Footer */}
      <footer className="text-purple-100 text-sm text-center py-5 border-t border-purple-300 bg-white/20 backdrop-blur-sm">
        © {new Date().getFullYear()} CivicAI Reporter | Designed with ❤️
      </footer>

      {/* Floating shapes animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
