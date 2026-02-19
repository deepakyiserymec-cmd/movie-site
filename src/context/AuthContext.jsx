import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('netflix_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login - in real app, verify with backend
        const storedUsers = JSON.parse(localStorage.getItem('netflix_users') || '[]');
        const existingUser = storedUsers.find(u => u.email === email && u.password === password);

        if (existingUser) {
            setUser(existingUser);
            localStorage.setItem('netflix_user', JSON.stringify(existingUser));
            return { success: true };
        }
        return { success: false, error: 'Invalid email or password' };
    };

    const signup = (name, email, password) => {
        const storedUsers = JSON.parse(localStorage.getItem('netflix_users') || '[]');
        if (storedUsers.find(u => u.email === email)) {
            return { success: false, error: 'User already exists' };
        }
        const newUser = { name, email, password };
        storedUsers.push(newUser);
        localStorage.setItem('netflix_users', JSON.stringify(storedUsers));

        // Auto login after signup
        setUser(newUser);
        localStorage.setItem('netflix_user', JSON.stringify(newUser));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('netflix_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
