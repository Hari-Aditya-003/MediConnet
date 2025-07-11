import { Doctor, Appointment, Prescription, Hospital } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    userId: 'Sarah Johnson',
    specialization: 'cardiology',
    experience: 10,
    rating: 4.8,
    consultationFee: 500,
    availability: [
      { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    ],
    location: {
      lat: 28.6139,
      lng: 77.2090,
      address: '123 Medical Center, Delhi',
      hospitalName: 'City General Hospital'
    },
    qualifications: ['MBBS', 'MD Cardiology', 'Fellowship in Interventional Cardiology'],
    isAvailable: true,
  },
  {
    id: '2',
    userId: 'Michael Chen',
    specialization: 'dermatology',
    experience: 8,
    rating: 4.6,
    consultationFee: 400,
    availability: [
      { day: 'Monday', startTime: '10:00', endTime: '18:00', isAvailable: true },
      { day: 'Thursday', startTime: '10:00', endTime: '18:00', isAvailable: true },
      { day: 'Friday', startTime: '10:00', endTime: '18:00', isAvailable: true },
    ],
    location: {
      lat: 28.6129,
      lng: 77.2295,
      address: '456 Skin Care Clinic, Delhi',
    },
    qualifications: ['MBBS', 'MD Dermatology', 'Fellowship in Cosmetic Dermatology'],
    isAvailable: true,
  },
  {
    id: '3',
    userId: 'Emily Rodriguez',
    specialization: 'pediatrics',
    experience: 12,
    rating: 4.9,
    consultationFee: 450,
    availability: [
      { day: 'Monday', startTime: '08:00', endTime: '16:00', isAvailable: true },
      { day: 'Tuesday', startTime: '08:00', endTime: '16:00', isAvailable: true },
      { day: 'Wednesday', startTime: '08:00', endTime: '16:00', isAvailable: true },
    ],
    location: {
      lat: 28.6304,
      lng: 77.2177,
      address: '789 Children Hospital, Delhi',
      hospitalName: 'Kids Care Hospital'
    },
    qualifications: ['MBBS', 'MD Pediatrics', 'Fellowship in Pediatric Cardiology'],
    isAvailable: false,
  },
  {
    id: '4',
    userId: 'David Kumar',
    specialization: 'orthopedics',
    experience: 15,
    rating: 4.7,
    consultationFee: 600,
    availability: [
      { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Saturday', startTime: '09:00', endTime: '13:00', isAvailable: true },
    ],
    location: {
      lat: 28.6157,
      lng: 77.2088,
      address: '321 Bone & Joint Center, Delhi',
    },
    qualifications: ['MBBS', 'MS Orthopedics', 'Fellowship in Joint Replacement'],
    isAvailable: true,
  },
  {
    id: '5',
    userId: 'Lisa Anderson',
    specialization: 'psychiatry',
    experience: 9,
    rating: 4.5,
    consultationFee: 550,
    availability: [
      { day: 'Monday', startTime: '11:00', endTime: '19:00', isAvailable: true },
      { day: 'Wednesday', startTime: '11:00', endTime: '19:00', isAvailable: true },
      { day: 'Friday', startTime: '11:00', endTime: '19:00', isAvailable: true },
    ],
    location: {
      lat: 28.6245,
      lng: 77.2167,
      address: '654 Mental Health Center, Delhi',
    },
    qualifications: ['MBBS', 'MD Psychiatry', 'Fellowship in Child Psychology'],
    isAvailable: true,
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: 'patient1',
    doctorId: '1',
    date: '2024-01-15',
    time: '10:00',
    status: 'scheduled',
    symptoms: 'Chest pain and shortness of breath',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    patientId: 'patient2',
    doctorId: '2',
    date: '2024-01-14',
    time: '14:30',
    status: 'completed',
    symptoms: 'Skin rash and itching',
    createdAt: new Date('2024-01-12'),
  },
  {
    id: '3',
    patientId: 'patient3',
    doctorId: '3',
    date: '2024-01-16',
    time: '09:15',
    status: 'scheduled',
    symptoms: 'Fever and cough in child',
    createdAt: new Date('2024-01-13'),
  },
  {
    id: '4',
    patientId: 'patient1',
    doctorId: '4',
    date: '2024-01-13',
    time: '11:00',
    status: 'completed',
    symptoms: 'Knee pain and stiffness',
    createdAt: new Date('2024-01-08'),
  },
  {
    id: '5',
    patientId: 'patient4',
    doctorId: '5',
    date: '2024-01-17',
    time: '16:00',
    status: 'scheduled',
    symptoms: 'Anxiety and depression',
    createdAt: new Date('2024-01-14'),
  },
];

export const mockPrescriptions: Prescription[] = [
  {
    id: '1',
    appointmentId: '2',
    doctorId: '2',
    patientId: 'patient2',
    medications: [
      {
        name: 'Hydrocortisone Cream',
        dosage: '1%',
        frequency: 'Apply twice daily',
        duration: '7 days',
        instructions: 'Apply to affected areas only'
      },
      {
        name: 'Cetirizine',
        dosage: '10mg',
        frequency: 'Once daily',
        duration: '5 days',
        instructions: 'Take with food'
      }
    ],
    diagnosis: 'Allergic dermatitis',
    notes: 'Avoid known allergens. Return if symptoms persist.',
    createdAt: new Date('2024-01-14'),
  },
  {
    id: '2',
    appointmentId: '4',
    doctorId: '4',
    patientId: 'patient1',
    medications: [
      {
        name: 'Ibuprofen',
        dosage: '400mg',
        frequency: 'Three times daily',
        duration: '10 days',
        instructions: 'Take with food to avoid stomach upset'
      },
      {
        name: 'Glucosamine',
        dosage: '1500mg',
        frequency: 'Once daily',
        duration: '30 days',
        instructions: 'Take with water'
      }
    ],
    diagnosis: 'Osteoarthritis of knee',
    notes: 'Consider physiotherapy. Avoid high-impact activities.',
    createdAt: new Date('2024-01-13'),
  },
];

export const mockHospitals: Hospital[] = [
  {
    id: '1',
    userId: 'hospital1',
    name: 'City General Hospital',
    location: {
      lat: 28.6139,
      lng: 77.2090,
      address: '123 Main Street, Delhi'
    },
    services: ['Emergency', 'Cardiology', 'Orthopedics', 'Pediatrics'],
    rating: 4.8,
    isEmergency: true,
    contactNumber: '+91-11-2234-5678'
  },
  {
    id: '2',
    userId: 'hospital2',
    name: 'Metro Medical Center',
    location: {
      lat: 28.6129,
      lng: 77.2295,
      address: '456 Park Avenue, Delhi'
    },
    services: ['Dermatology', 'Psychiatry', 'General Medicine'],
    rating: 4.6,
    isEmergency: false,
    contactNumber: '+91-11-2234-5679'
  },
];