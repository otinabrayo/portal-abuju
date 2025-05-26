import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'
import WelcomePage from './components/WelcomePage'
import Subject from './components/Subject'
import ThankYou from './components/ThankYou'
import Register from './components/Register'
import O_Subject from './components/O_Subject'
import Reply from './components/Reply'
import A_Reply from './components/A_Reply'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/portal-abuju' : '/';

function App() {
  return (
    <ErrorBoundary>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <div className="flex flex-col min-h-screen font-inter dark:bg-pink-100">
          <div className="flex-grow">
            <div className="max-w-6xl w-full mx-auto">
              <Router basename={basename}>
                <Routes>
                  <Route path="/" element={<WelcomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/subject" element={
                    <ProtectedRoute>
                      <ErrorBoundary>
                        <Subject />
                      </ErrorBoundary>
                    </ProtectedRoute>
                  } />
                  <Route path="/o_subject" element={
                    <ProtectedRoute>
                      <ErrorBoundary>
                        <O_Subject />
                      </ErrorBoundary>
                    </ProtectedRoute>
                  } />
                  <Route path="/thankyou" element={
                    <ProtectedRoute>
                      <ErrorBoundary>
                        <ThankYou />
                      </ErrorBoundary>
                    </ProtectedRoute>
                  } />
                  <Route path="/reply" element={
                    <ProtectedRoute>
                      <ErrorBoundary>
                        <Reply />
                      </ErrorBoundary>
                    </ProtectedRoute>
                  } />
                  <Route path="/a_reply" element={
                    <ProtectedRoute>
                      <ErrorBoundary>
                        <A_Reply />
                      </ErrorBoundary>
                    </ProtectedRoute>
                  } />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Router>
            </div>
          </div>
          <Footer />
        </div>
      </GoogleOAuthProvider>
    </ErrorBoundary>
  )
}

export default App;