import React, { useState } from 'react';
import { Phone, Mail, MapPin, FileText, Bell, ChevronRight, Calendar, Users, AlertCircle, CheckCircle2, Clock, Droplets, Wrench, Wind } from 'lucide-react';

export default function Muncipal() {
  const [activeTab, setActiveTab] = useState('overview');

  const recentReports = [
    { id: '#4725', location: 'MVP Colony', type: 'Pipe Leakage', status: 'In Progress', date: '26 Oct 2025', priority: 'High' },
    { id: '#4724', location: 'Dwaraka Nagar', type: 'Water Supply Issue', status: 'Pending', date: '25 Oct 2025', priority: 'Medium' },
    { id: '#4723', location: 'Siripuram', type: 'Drainage Block', status: 'Resolved', date: '24 Oct 2025', priority: 'Low' },
    { id: '#4722', location: 'Rushikonda', type: 'Broken Pipeline', status: 'In Progress', date: '23 Oct 2025', priority: 'High' }
  ];

  const stats = [
    { label: 'Total Complaints', value: '2,156', icon: <FileText className="w-6 h-6" />, color: 'blue' },
    { label: 'Resolved', value: '1,534', icon: <CheckCircle2 className="w-6 h-6" />, color: 'green' },
    { label: 'Under Work', value: '456', icon: <Wrench className="w-6 h-6" />, color: 'yellow' },
    { label: 'Pending', value: '166', icon: <AlertCircle className="w-6 h-6" />, color: 'red' }
  ];

  const services = [
    { icon: <Droplets className="w-8 h-8" />, title: 'Water Supply', desc: 'Report water supply issues' },
    { icon: <Wrench className="w-8 h-8" />, title: 'Pipe Repairs', desc: 'Broken or leaking pipes' },
    { icon: <Wind className="w-8 h-8" />, title: 'Drainage', desc: 'Sewage and drainage problems' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Resolved': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Pending': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-50 text-red-600 border-red-200';
      case 'Medium': return 'bg-yellow-50 text-yellow-600 border-yellow-200';
      case 'Low': return 'bg-blue-50 text-blue-600 border-blue-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header Bar */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>भारत सरकार | Government of India</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">हिंदी</a>
            <span>|</span>
            <a href="#" className="hover:underline">English</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-4 border-blue-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Municipal Emblem */}
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Greater Visakhapatnam Municipal Corporation</h1>
                <p className="text-sm text-gray-600">Water Supply & Sanitation Department</p>
                <p className="text-xs text-gray-500">जल आपूर्ति और स्वच्छता विभाग</p>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/gvt.jpeg" alt="Municipality Logo" className="h-20 object-contain" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {['Overview', 'Complaints', 'Services', 'Water Supply', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`px-6 py-3 font-medium hover:bg-blue-700 transition ${
                  activeTab === item.toLowerCase() ? 'bg-blue-700 border-b-2 border-green-500' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="bg-blue-50 border-l-4 border-blue-500 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Bell className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Notice:</span> AI-powered pipe monitoring system is now active. Report water leaks and pipe damages instantly for priority response.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section with Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4 w-fit">
                SMART WATER MANAGEMENT
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Report Water & Pipe Issues
              </h2>
              <p className="text-gray-600 mb-6">
                Our AI-powered system detects and classifies pipe leakages, water supply problems, and drainage issues for immediate action by our technical teams.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition flex items-center">
                  File Complaint
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
                  Track Status
                </button>
              </div>
            </div>
            <div className="h-full">
              <img 
                src="/municipality.png" 
                alt="Municipality Water Department" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-100', 'to-green-50');
                }}
              />
            </div>
          </div>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-800 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-3 rounded-lg bg-${stat.color}-100 text-${stat.color}-600`}>
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center">
                Report Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Recent Complaints Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-blue-900">Recent Complaints</h3>
            <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Complaint ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Issue Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Priority</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report) => (
                  <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm text-blue-600 font-semibold">{report.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{report.location}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{report.type}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(report.priority)}`}>
                        {report.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{report.date}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                        View
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Water Supply Schedule */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-8 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <Droplets className="w-6 h-6 mr-2" />
            Water Supply Schedule
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Morning Supply</h4>
              <p className="text-sm text-gray-600">06:00 AM - 09:00 AM</p>
              <p className="text-xs text-gray-500 mt-1">All zones covered</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Evening Supply</h4>
              <p className="text-sm text-gray-600">06:00 PM - 09:00 PM</p>
              <p className="text-xs text-gray-500 mt-1">All zones covered</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg mr-3">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900">Emergency Helpline</h4>
            </div>
            <p className="text-gray-700 font-semibold">1800-425-0891</p>
            <p className="text-sm text-gray-500">24/7 Water Emergency</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg mr-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900">Email Support</h4>
            </div>
            <p className="text-gray-700 font-semibold text-sm">water@gvmc.gov.in</p>
            <p className="text-sm text-gray-500">Response within 24 hrs</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg mr-3">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900">Head Office</h4>
            </div>
            <p className="text-gray-700 font-semibold text-sm">GVMC Complex</p>
            <p className="text-sm text-gray-500">Visakhapatnam - 530002</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
            <div>
              <h4 className="font-bold mb-3">About GVMC</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Organization</a></li>
                <li><a href="#" className="hover:text-white">Departments</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">Water Supply</a></li>
                <li><a href="#" className="hover:text-white">Pipe Repairs</a></li>
                <li><a href="#" className="hover:text-white">Drainage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Citizen Services</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">File Complaint</a></li>
                <li><a href="#" className="hover:text-white">Track Status</a></li>
                <li><a href="#" className="hover:text-white">Pay Bills</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Information</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">RTI</a></li>
                <li><a href="#" className="hover:text-white">Tenders</a></li>
                <li><a href="#" className="hover:text-white">Notifications</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-6 text-center text-sm text-blue-200">
            <p>© 2025 Greater Visakhapatnam Municipal Corporation. All Rights Reserved.</p>
            <p className="mt-2">Content owned by GVMC | Maintained by Water Supply & Sanitation Department</p>
          </div>
        </div>
      </footer>
    </div>
  );
}