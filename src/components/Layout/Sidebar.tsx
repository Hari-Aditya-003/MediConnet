import React from 'react';
import { 
  Home, 
  Calendar, 
  FileText, 
  MapPin, 
  AlertTriangle, 
  Users, 
  Settings,
  Stethoscope,
  Building
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, isOpen }) => {
  const { user } = useAuth();

  const getMenuItems = () => {
    switch (user?.role) {
      case 'patient':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'find-doctors', label: 'Find Doctors', icon: Stethoscope },
          { id: 'appointments', label: 'Appointments', icon: Calendar },
          { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
          { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
          { id: 'profile', label: 'Profile', icon: Settings },
        ];
      case 'doctor':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'appointments', label: 'Appointments', icon: Calendar },
          { id: 'patients', label: 'Patients', icon: Users },
          { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
          { id: 'schedule', label: 'Schedule', icon: MapPin },
          { id: 'profile', label: 'Profile', icon: Settings },
        ];
      case 'hospital':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'doctors', label: 'Doctors', icon: Stethoscope },
          { id: 'patients', label: 'Patients', icon: Users },
          { id: 'appointments', label: 'Appointments', icon: Calendar },
          { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
          { id: 'profile', label: 'Profile', icon: Settings },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0 md:static md:inset-0
    `}>
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                {user?.role === 'hospital' ? (
                  <Building className="h-6 w-6 text-white" />
                ) : (
                  <Stethoscope className="h-6 w-6 text-white" />
                )}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {user?.role === 'hospital' ? 'Hospital Panel' : 'MediConnect'}
              </span>
            </div>
          </div>
          
          <nav className="mt-8 flex-1 px-2 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`
                    group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left
                    ${activeTab === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className={`
                    mr-3 flex-shrink-0 h-6 w-6
                    ${activeTab === item.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                  `} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;