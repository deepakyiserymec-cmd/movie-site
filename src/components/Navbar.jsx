import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaSearch, FaBell } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between px-4 py-4 md:px-12">
                <Link to="/home" className="text-red-600 text-3xl font-bold uppercase cursor-pointer">
                    NETFLIX
                </Link>
                <div className="flex items-center space-x-4 text-white">
                    <FaSearch className="cursor-pointer" />
                    <span className="cursor-pointer" onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
