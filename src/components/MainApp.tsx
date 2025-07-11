import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import PatientDashboard from './Dashboard/PatientDashboard';
import DoctorDashboard from './Dashboard/DoctorDashboard';
import HospitalDashboard from './Dashboard/HospitalDashboard';
import DoctorFinder from './Features/DoctorFinder';
import EmergencyService from './Features/EmergencyService';

const MainApp: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        if (user?.role === 'patient') return <PatientDashboard />;
        if (user?.role === 'doctor') return <DoctorDashboard />;
        if (user?.role === 'hospital') return <HospitalDashboard />;
        return <PatientDashboard />;
      case 'find-doctors':
        return <DoctorFinder />;
      case 'emergency':
        return <EmergencyService />;
      case 'appointments':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Appointments</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600">Appointments management coming soon...</p>
            </div>
          </div>
        );
      case 'prescriptions':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Prescriptions</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600">Prescription management coming soon...</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600">Profile management coming soon...</p>
            </div>
          </div>
        );
      default:
        return <PatientDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isOpen={sidebarOpen}
        />
        
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <main className="flex-1 md:ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MainApp;