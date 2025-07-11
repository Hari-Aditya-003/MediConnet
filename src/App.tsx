import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthForm from './components/Auth/AuthForm';
import MainApp from './components/MainApp';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading MediConnect...</p>
        </div>
      </div>
    );
  }

  return user ? <MainApp /> : <AuthForm />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;