import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import {
  Menu,
  X,
  AlertTriangle,
  FileText,
  LogOut,
  Camera,
  Cpu,
  History,
  CheckCircle,
  Clock,
  Users,
  Move, // Icon for potholes
  LightbulbOff,
  Trash2,
  Paintbrush,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/"); // redirect to login
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Failed to logout. Try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-cyan-400">CivicAI Reporter</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/fun" className="hover:text-cyan-300 transition">
            Report Problem
          </Link>
          <Link to="/display" className="hover:text-cyan-300 transition">
            View Reports
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-red-300 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="sticky top-[68px] z-40 md:hidden flex flex-col bg-gray-800 bg-opacity-90 px-6 py-4 space-y-3 shadow-lg">
          <Link
            to="/fun"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-300"
          >
            Report Problem
          </Link>
          <Link
            to="/display"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-300"
          >
            View Reports
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="text-red-400 hover:text-red-300 text-left"
          >
            Logout
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg">
            AI-Based Civic Problem Reporting System
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg mb-10">
            Empowering citizens to report civic issues like potholes, streetlight
            failures, and sanitation problems using AI detection and automated
            categorization. Stay informed and help improve your community!
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <Link
              to="/fun"
              className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all transform hover:scale-105"
            >
              <AlertTriangle size={20} />
              Report a Problem
            </Link>

            <Link
              to="/display"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all transform hover:scale-105"
            >
              <FileText size={20} />
              View Reports
            </Link>
            {/* Logout button removed from here - it's already in the nav */}
          </div>
        </div>

        {/* How It Works Section */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="text-3xl font-bold text-center mb-10 text-cyan-400">
              Report in 3 Easy Steps
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center p-6 bg-gray-700 rounded-xl shadow-lg">
                <Camera size={48} className="text-cyan-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">1. Snap & Upload</h4>
                <p className="text-gray-300">
                  Take a photo or video of the issue (pothole, broken light,
                  etc.) and upload it through our simple form.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center text-center p-6 bg-gray-700 rounded-xl shadow-lg">
                <Cpu size={48} className="text-cyan-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">2. AI Analyzes</h4>
                <p className="text-gray-300">
                  Our AI automatically analyzes the image, categorizes the
                  problem, and identifies the location.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center text-center p-6 bg-gray-700 rounded-xl shadow-lg">
                <History size={48} className="text-cyan-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">3. Submit & Track</h4>
                <p className="text-gray-300">
                  Confirm the details and submit. You can track the status of
                  your report right from your dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 max-w-6xl">
            <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
              Features That Empower You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <CheckCircle size={32} className="text-emerald-400 mb-3" />
                <h4 className="text-xl font-semibold mb-2">
                  AI-Powered Detection
                </h4>
                <p className="text-gray-300">
                  Advanced machine learning models identify and classify problems
                  from your images, reducing manual effort.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Clock size={32} className="text-emerald-400 mb-3" />
                <h4 className="text-xl font-semibold mb-2">
                  Real-Time Status Updates
                </h4>
                <p className="text-gray-300">
                  Get notified and check the status of your reports as they are
                  received, reviewed, and resolved.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Users size={32} className="text-emerald-400 mb-3" />
                <h4 className="text-xl font-semibold mb-2">Community Dashboard</h4>
                <p className="text-gray-300">
                  View all public reports on an interactive map and see the
                  progress being made in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Can You Report? Section */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="text-3xl font-bold text-center mb-10 text-cyan-400">
              Help Improve Your Neighborhood
            </h3>
            <p className="text-center text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Your reports provide valuable data to city officials, helping them
              prioritize and fix issues faster.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md">
                <Move size={40} className="text-cyan-300 mb-2" />
                <span className="font-semibold">Potholes</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md">
                <LightbulbOff size={40} className="text-cyan-300 mb-2" />
                <span className="font-semibold">Broken Streetlights</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md">
                <Trash2 size={40} className="text-cyan-300 mb-2" />
                <span className="font-semibold">Waste Management</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md">
                <Paintbrush size={40} className="text-cyan-300 mb-2" />
                <span className="font-semibold">Graffiti</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-gray-400 text-sm text-center py-5 border-t border-gray-700">
        © {new Date().getFullYear()} CivicAI Reporter | Designed with ❤️ for
        Smart Cities
      </footer>
    </div>
  );
};

export default Home;