import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Clock, Navigation, Ambulance } from 'lucide-react';
import { Hospital } from '../../types';

const EmergencyService: React.FC = () => {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [selectedEmergencyType, setSelectedEmergencyType] = useState<'hospital' | 'ambulance' | 'urgent-care'>('hospital');

  const nearbyEmergencyServices: Hospital[] = [
    {
      id: '1',
      userId: 'hospital1',
      name: 'City General Hospital',
      location: {
        lat: 28.6139,
        lng: 77.2090,
        address: '123 Main St, Delhi'
      },
      services: ['Emergency', 'Cardiology', 'Trauma'],
      rating: 4.8,
      isEmergency: true,
      contactNumber: '+91-11-2234-5678'
    },
    {
      id: '2',
      userId: 'hospital2',
      name: 'Metro Emergency Center',
      location: {
        lat: 28.6129,
        lng: 77.2295,
        address: '456 Park Ave, Delhi'
      },
      services: ['Emergency', 'Pediatrics', 'Urgent Care'],
      rating: 4.6,
      isEmergency: true,
      contactNumber: '+91-11-2234-5679'
    },
    {
      id: '3',
      userId: 'hospital3',
      name: 'Quick Care Clinic',
      location: {
        lat: 28.6304,
        lng: 77.2177,
        address: '789 Health Blvd, Delhi'
      },
      services: ['Urgent Care', 'Minor Injuries', 'Walk-in'],
      rating: 4.5,
      isEmergency: false,
      contactNumber: '+91-11-2234-5680'
    }
  ];

  const handleEmergencyCall = () => {
    setIsEmergencyActive(true);
    // Simulate emergency call
    setTimeout(() => {
      setIsEmergencyActive(false);
    }, 3000);
  };

  const EmergencyButton: React.FC<{ 
    type: 'hospital' | 'ambulance' | 'urgent-care';
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  }> = ({ type, icon, title, description, color }) => (
    <button
      onClick={() => setSelectedEmergencyType(type)}
      className={`p-6 rounded-lg border-2 transition-all duration-200 text-left w-full ${
        selectedEmergencyType === type
          ? `border-${color}-500 bg-${color}-50`
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${selectedEmergencyType === type ? `bg-${color}-100` : 'bg-gray-100'}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Services</h1>
        <p className="text-gray-600">Get immediate medical help when you need it most</p>
      </div>

      {/* Emergency Alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <div>
            <h3 className="font-semibold text-red-900">Emergency Hotline</h3>
            <p className="text-sm text-red-700">For life-threatening emergencies, call 102 immediately</p>
          </div>
        </div>
        <button
          onClick={handleEmergencyCall}
          disabled={isEmergencyActive}
          className={`mt-4 px-6 py-3 rounded-lg font-semibold transition-colors ${
            isEmergencyActive
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          {isEmergencyActive ? 'Calling...' : 'Call Emergency Services'}
        </button>
      </div>

      {/* Emergency Type Selection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">What do you need?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EmergencyButton
            type="hospital"
            icon={<AlertTriangle className="h-6 w-6 text-red-600" />}
            title="Emergency Hospital"
            description="Serious medical emergencies"
            color="red"
          />
          <EmergencyButton
            type="ambulance"
            icon={<Ambulance className="h-6 w-6 text-blue-600" />}
            title="Ambulance"
            description="Emergency transport needed"
            color="blue"
          />
          <EmergencyButton
            type="urgent-care"
            icon={<Clock className="h-6 w-6 text-green-600" />}
            title="Urgent Care"
            description="Non-emergency medical needs"
            color="green"
          />
        </div>
      </div>

      {/* Nearby Services */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Nearby Services</h2>
          <p className="text-gray-600 mt-1">Based on your current location</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {nearbyEmergencyServices.map((service) => (
              <div key={service.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      {service.isEmergency && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                          24/7 Emergency
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{service.location.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>{service.contactNumber}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {service.services.map((serviceType, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {serviceType}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-600 mr-1">Rating:</span>
                      <span className="font-semibold text-gray-900">{service.rating}</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">1.2 km away</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>ETA: 8 minutes</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <Navigation className="h-4 w-4" />
                      Directions
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Tips */}
      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-blue-900 mb-3">Emergency Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Before Emergency Services Arrive:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Stay calm and keep the patient comfortable</li>
              <li>• Do not move the patient unless necessary</li>
              <li>• Keep airways clear and monitor breathing</li>
              <li>• Apply pressure to bleeding wounds</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Information to Provide:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Your exact location</li>
              <li>• Nature of the emergency</li>
              <li>• Number of people involved</li>
              <li>• Any known medical conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyService;