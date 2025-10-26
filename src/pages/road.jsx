import React, { useState } from 'react';
import { Phone, Mail, MapPin, FileText, Bell, ChevronRight, Calendar, Users, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function Road() {
  const [activeTab, setActiveTab] = useState('overview');

  const recentReports = [
    { id: '#4721', location: 'NH-16, Visakhapatnam', type: 'Pothole', status: 'In Progress', date: '26 Oct 2025' },
    { id: '#4720', location: 'Dwaraka Nagar', type: 'Road Damage', status: 'Pending', date: '25 Oct 2025' },
    { id: '#4719', location: 'Beach Road Junction', type: 'Pothole', status: 'Resolved', date: '24 Oct 2025' },
    { id: '#4718', location: 'Gajuwaka Main Road', type: 'Surface Crack', status: 'In Progress', date: '23 Oct 2025' }
  ];

  const stats = [
    { label: 'Total Reports', value: '1,247', icon: <FileText className="w-6 h-6" />, color: 'blue' },
    { label: 'Resolved', value: '892', icon: <CheckCircle2 className="w-6 h-6" />, color: 'green' },
    { label: 'In Progress', value: '248', icon: <Clock className="w-6 h-6" />, color: 'yellow' },
    { label: 'Pending', value: '107', icon: <AlertCircle className="w-6 h-6" />, color: 'red' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Resolved': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Pending': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4">
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
      <header className="bg-white border-b-4 border-blue-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Government Emblem */}
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-xs text-center">
                  <div>भारत</div>
                  <div className="text-[10px]">INDIA</div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">National Highways Authority of India</h1>
                <p className="text-sm text-gray-600">Ministry of Road Transport and Highways</p>
                <p className="text-xs text-gray-500">राष्ट्रीय राजमार्ग प्राधिकरण</p>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/gvt.jpeg" alt="Road Authority Logo" className="h-20 object-contain" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {['Overview', 'Reports', 'Services', 'Tenders', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`px-6 py-3 font-medium hover:bg-blue-800 transition ${
                  activeTab === item.toLowerCase() ? 'bg-blue-800 border-b-2 border-orange-500' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Bell className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Important Notice:</span> AI-powered pothole detection system now active. Report road damages instantly through our portal.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section with Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4 w-fit">
                AI-POWERED REPORTING
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Report Road Issues Instantly
              </h2>
              <p className="text-gray-600 mb-6">
                Our advanced AI system automatically classifies and routes your road damage reports to the appropriate teams for quick resolution.
              </p>
              <div className="flex space-x-4">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition flex items-center">
                  File a Report
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
                  Track Status
                </button>
              </div>
            </div>
            <div className="h-full">
              <img 
                src="/roadauthority.png" 
                alt="Road Authority Operations" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-100', 'to-blue-50');
                }}
              />
            </div>
          </div>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-900 hover:shadow-lg transition">
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

        {/* Recent Reports Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-blue-900">Recent Reports</h3>
            <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Report ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
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

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg mr-3">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900">Helpline</h4>
            </div>
            <p className="text-gray-700 font-semibold">1800-111-555</p>
            <p className="text-sm text-gray-500">24/7 Available</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg mr-3">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900">Email Support</h4>
            </div>
            <p className="text-gray-700 font-semibold text-sm">support@nhai.gov.in</p>
            <p className="text-sm text-gray-500">Response in 24 hours</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg mr-3">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900">Regional Office</h4>
            </div>
            <p className="text-gray-700 font-semibold text-sm">Visakhapatnam</p>
            <p className="text-sm text-gray-500">Andhra Pradesh</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
            <div>
              <h4 className="font-bold mb-3">About NHAI</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Vision & Mission</a></li>
                <li><a href="#" className="hover:text-white">Organization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">Report Issues</a></li>
                <li><a href="#" className="hover:text-white">Track Status</a></li>
                <li><a href="#" className="hover:text-white">Pay Toll</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">Tenders</a></li>
                <li><a href="#" className="hover:text-white">RTI</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
            <p>© 2025 National Highways Authority of India. All Rights Reserved.</p>
            <p className="mt-2">Content owned and maintained by NHAI | Designed and Developed by NIC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}