import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import DashboardLayout from './components/layouts/DashboardLayout';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard';
import JobManagement from './components/pages/JobManagement';
import CandidateManagement from './components/pages/CandidateManagement';
import CandidateDetails from './components/pages/CandidateDetails';
import InterviewScheduling from './components/pages/InterviewScheduling';
import CompanyProfile from './components/pages/CompanyProfile';
import HRManagement from './components/pages/HRManagement';
import InterviewRounds from './components/pages/InterviewRounds';
import InterviewFeedback from './components/pages/InterviewFeedback';
import NotificationsCenter from './components/pages/NotificationsCenter';
import Settings from './components/pages/Settings';
import ApplicationForm from './components/pages/ApplicationForm';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route
            path="/login"
            element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route
            path="/apply/:jobId"
            element={<ApplicationForm />}
          />
          {isAuthenticated ? (
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="jobs" element={<JobManagement />} />
              <Route path="candidates" element={<CandidateManagement />} />
              <Route path="candidates/:id" element={<CandidateDetails />} />
              <Route path="interviews" element={<InterviewScheduling />} />
              <Route path="interviews/:id/feedback" element={<InterviewFeedback />} />
              <Route path="company" element={<CompanyProfile />} />
              <Route path="hr-team" element={<HRManagement />} />
              <Route path="interview-rounds" element={<InterviewRounds />} />
              <Route path="notifications" element={<NotificationsCenter />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
