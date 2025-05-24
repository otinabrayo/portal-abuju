import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import WelcomePage from './components/WelcomePage'
import Subject from './components/Subject'
import ThankYou from './components/ThankYou'
import Register from './components/Register'
import O_Subject from './components/O_Subject'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const basename = import.meta.env.BASE_URL || '/'

function App() {
  return (
    <>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Router basename={basename}>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/subject" element={
                                        <ProtectedRoute>
                                          <Subject />
                                        </ProtectedRoute>
                                     }
              />
              <Route path="/o_subject" element={
                                        <ProtectedRoute>
                                          <O_Subject />
                                        </ProtectedRoute>
                                     }
              />
              <Route path="/thankyou" element={
                                        <ProtectedRoute>
                                          <ThankYou />
                                        </ProtectedRoute>
                                      }
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App;