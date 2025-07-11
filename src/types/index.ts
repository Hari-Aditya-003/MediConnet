export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'hospital';
  phone?: string;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  createdAt: Date;
}

export interface Doctor {
  id: string;
  userId: string;
  specialization: string;
  experience: number;
  rating: number;
  consultationFee: number;
  availability: TimeSlot[];
  location: {
    lat: number;
    lng: number;
    address: string;
    hospitalName?: string;
  };
  qualifications: string[];
  isAvailable: boolean;
}

export interface Hospital {
  id: string;
  userId: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  services: string[];
  rating: number;
  isEmergency: boolean;
  contactNumber: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  symptoms?: string;
  notes?: string;
  createdAt: Date;
}

export interface Prescription {
  id: string;
  appointmentId: string;
  doctorId: string;
  patientId: string;
  medications: Medication[];
  diagnosis: string;
  notes?: string;
  createdAt: Date;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Emergency {
  id: string;
  patientId: string;
  location: {
    lat: number;
    lng: number;
  };
  type: 'ambulance' | 'hospital' | 'urgent-care';
  status: 'active' | 'resolved';
  createdAt: Date;
}