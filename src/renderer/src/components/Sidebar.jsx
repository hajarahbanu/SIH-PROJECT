/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/hadap_logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import { RiDashboardLine } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineFolder } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: AiOutlineHome, label: 'Home' },
    { path: '/dashboard', icon: RiDashboardLine, label: 'Dashboard' },
    { path: '/folders', icon: HiOutlineFolder, label: 'Folders' },
    { path: '/privacy', icon: AiOutlineLock, label: 'Privacy' },
    { path: '/support', icon: BiSupport, label: 'Support' },
    { path: '/settings', icon: FiSettings, label: 'Settings' },
  ];

  return (
    <div className="w-64 h-full bg-white fixed px-4 py-2">
      <div className="my-2 mb-4">
        <img src={logo} alt="Admin Dashboard Logo" className="inline-block w-24 h-15 mr-2 -mt-1" />
      </div>
      <hr className="text-black font-bold" />
      <ul className="mt-1 text-black">
        {menuItems.map(({ path, icon: Icon, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`flex items-center mb-3 rounded py-2 px-2 transition-all duration-200 ${
                location.pathname === path
                  ? 'bg-purple-100 text-purple-600 shadow-sm'
                  : 'hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;