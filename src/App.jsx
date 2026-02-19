import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MovieDetails from './pages/MovieDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';

function Root() {
    const { user, loading } = useAuth();

    if (loading) return null;

    return (
        <Routes>
            <Route path='/' element={user ? <Navigate to='/home' /> : <Navigate to='/login' />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/movie/:id' element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <Root />
        </AuthProvider>
    );
}

export default App;
