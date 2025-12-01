import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// IMPORTANT: These global variables are provided by the canvas environment.
// We disable ESLint for these lines to prevent local errors.
// eslint-disable-next-line
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
// eslint-disable-next-line
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
// eslint-disable-next-line
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : '';

// A custom Modal component to replace the external file
const Modal = ({ message, onClose, isError }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className={`modal-message ${isError ? 'error' : 'success'}`}>
          {message}
        </p>
        <button
          onClick={onClose}
          className="auth-button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [facultyId, setFacultyId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isFirebaseInitialized, setIsFirebaseInitialized] = useState(false);

  useEffect(() => {
    let unsubscribe = () => {};
    try {
      if (Object.keys(firebaseConfig).length === 0) {
        console.error("Firebase config is missing. The app will not be able to connect to Firestore.");
        return;
      }
      const app = initializeApp(firebaseConfig);
      const authInstance = getAuth(app);
      const dbInstance = getFirestore(app);
      getAnalytics(app); // Initialize analytics

      setAuth(authInstance);
      setDb(dbInstance);
      setIsFirebaseInitialized(true);

      unsubscribe = onAuthStateChanged(authInstance, async (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else if (initialAuthToken) {
          try {
            await signInWithCustomToken(authInstance, initialAuthToken);
            setUser(authInstance.currentUser);
          } catch (tokenError) {
            console.error("Error signing in with custom token:", tokenError);
          }
        }
      });
    } catch (firebaseError) {
      console.error("Failed to initialize Firebase:", firebaseError);
    }
    return () => unsubscribe();
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!isFirebaseInitialized || !auth || !db) {
      setError("Firebase services are not ready. Please try again.");
      setLoading(false);
      setShowModal(true);
      return;
    }

    try {
      if (isLogin) {
        if (isOtpLogin) {
          // --- OTP Verification Logic ---
          // This is a placeholder. In a real app, you would call a Firebase Function
          // or another backend service here to verify the OTP.
          const response = await fetch('/your-firebase-function-endpoint/verifyOtp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, otp }),
          });
          const result = await response.json();

          if (response.ok) {
            // If the OTP is correct, the backend sends back a custom auth token
            const customToken = result.customToken;
            await signInWithCustomToken(auth, customToken);
            setSuccess('OTP verified. Successfully logged in!');
          } else {
            setError(result.error || 'Invalid OTP. Please try again.');
          }
          // --- End of OTP Verification Logic ---
        } else {
          await signInWithEmailAndPassword(auth, email, password);
          setSuccess('Successfully logged in!');
        }
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        const userId = newUser.uid;
        
        const userRef = doc(db, `/artifacts/${appId}/users/${userId}/facultyProfile`, userId);
        
        await setDoc(userRef, {
          name,
          department,
          facultyId,
          email,
          uid: userId,
          createdAt: new Date()
        });
        setSuccess('Registration successful! You are now logged in.');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred. Please check your credentials and try again.');
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // --- OTP Sending Logic ---
    // This is a placeholder. In a real app, you would call a Firebase Function
    // or another backend service here to send the OTP via email.
    try {
      const response = await fetch('/your-firebase-function-endpoint/sendOtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (response.ok) {
        setSuccess('An OTP has been sent to your email.');
      } else {
        setError(result.error || 'Failed to send OTP. Please try again.');
      }
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
      setShowModal(true);
    }
    // --- End of OTP Sending Logic ---
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsOtpLogin(false);
    setEmail('');
    setPassword('');
    setOtp('');
    setName('');
    setDepartment('');
    setFacultyId('');
    setError('');
    setSuccess('');
  };

  const toggleOtpLogin = () => {
    setIsOtpLogin(!isOtpLogin);
    setEmail('');
    setPassword('');
    setOtp('');
    setError('');
    setSuccess('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
    setSuccess('');
  };

  return (
    <>
      <style>
        {`
          :root {
            --bg-color-light: #f7fafc;
            --text-color-white: #ffffff;
            --border-radius: 12px;
            --box-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
            --spacing-lg: 2rem;
            --spacing-md: 1rem;
            --text-color-light: #4a5568;
            --primary-color: #00796b;
            --secondary-color: #004d40;
            --box-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
          }

          .auth-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            padding: 2rem;
            background-color: var(--bg-color-light);
          }
          
          .auth-card {
            background-color: var(--text-color-white);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow-md);
            max-width: 450px;
            width: 100%;
            text-align: center;
          }
          
          .auth-title {
            color: var(--secondary-color);
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          
          .auth-info {
            color: var(--text-color-light);
            margin-bottom: var(--spacing-md);
            font-size: 0.9rem;
          }
          
          .auth-form .input-group {
            margin-bottom: 1.5rem;
            text-align: left;
          }
          
          .auth-form label {
            display: block;
            font-weight: 500;
            color: var(--secondary-color);
            margin-bottom: 0.5rem;
          }
          
          .auth-form input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            box-sizing: border-box;
          }
          
          .auth-form input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(0, 77, 64, 0.2);
          }
          
          .auth-button {
            width: 100%;
            padding: 12px;
            background-color: var(--primary-color);
            color: var(--text-color-white);
            border: none;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }
          
          .auth-button:hover {
            background-color: var(--secondary-color);
            transform: translateY(-2px);
          }
          
          .auth-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            transform: none;
          }
          
          .auth-toggle {
            margin-top: var(--spacing-md);
            font-size: 0.9rem;
            color: var(--text-color-light);
          }
          
          .toggle-button {
            background: none;
            border: none;
            color: var(--primary-color);
            font-weight: 600;
            cursor: pointer;
            padding: 0;
            margin-left: 5px;
            text-decoration: underline;
            transition: color 0.3s ease;
          }
          
          .toggle-button:hover {
            color: var(--secondary-color);
          }
          
          /* Modal Styles - for the popup messages */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          
          .modal-content {
            background-color: var(--text-color-white);
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow-lg);
            max-width: 400px;
            width: 90%;
            position: relative;
            text-align: center;
          }
          
          .modal-message.success {
            color: green;
            font-weight: 600;
          }
          
          .modal-message.error {
            color: red;
            font-weight: 600;
          }
          
          .modal-close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
          }
        `}
      </style>
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">{isLogin ? 'Faculty Login' : 'Faculty Registration'}</h2>
          <p className="auth-info">
            {isLogin
              ? "Log in to access your dashboard and manage your profile."
              : "Register as a new faculty member to create your profile."
            }
          </p>
          <form onSubmit={handleAuth} className="auth-form">
            {!isLogin && (
              <>
                <div className="input-group">
                  <label htmlFor="name">Faculty Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="facultyId">Faculty ID</label>
                  <input
                    type="text"
                    id="facultyId"
                    value={facultyId}
                    onChange={(e) => setFacultyId(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div className="input-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {isLogin && !isOtpLogin && (
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}
            {isLogin && isOtpLogin && (
              <>
                <div className="input-group">
                  <label htmlFor="otp">Enter OTP</label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="auth-button"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send OTP'}
                </button>
              </>
            )}
            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? 'Processing...' : isLogin ? (isOtpLogin ? 'Verify OTP' : 'Login') : 'Register'}
            </button>
          </form>
          <div className="auth-toggle">
            {isLogin && (
              <p>
                {isOtpLogin ? "Prefer password login?" : "Login with OTP instead?"}
                <button
                  type="button"
                  onClick={toggleOtpLogin}
                  className="toggle-button"
                >
                  {isOtpLogin ? 'Use Password' : 'Use OTP'}
                </button>
              </p>
            )}
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={toggleForm}
                className="toggle-button"
              >
                {isLogin ? 'Register here' : 'Login here'}
              </button>
            </p>
          </div>
        </div>
        {showModal && (
          <Modal
            message={error || success}
            onClose={handleCloseModal}
            isError={!!error}
          />
        )}
      </div>
    </>
  );
};

export default App;
