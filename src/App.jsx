import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './components/HomeScreen';
import LoginPage from './components/LoginPage';
import CourseDetails from './components/CourseDetails';
import AttendanceList from './components/AttendanceList';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* เปลี่ยนหน้าแรกเป็น Home */}
        <Route path="/" element={<HomeScreen />} />
        
        {/* เพิ่มเส้นทางสำหรับ Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* เส้นทางที่ต้องล็อกอินก่อนเข้า */}
        <Route path="/courses" element={
          <ProtectedRoute>
            <CourseDetails />
          </ProtectedRoute>
        } />

        <Route path="/attendance" element={
          <ProtectedRoute>
            <AttendanceList />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
