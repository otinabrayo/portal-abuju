import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import WelcomePage from './components/WelcomePage'
import Subject from './components/Subject'
import ThankYou from './components/ThankYou'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Router>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/subject"
                element={
                  <ProtectedRoute>
                    <Subject />
                  </ProtectedRoute>
                }
              />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App;