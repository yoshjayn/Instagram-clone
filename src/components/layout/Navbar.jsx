import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, User, Compass } from 'react-feather';
import { Send } from 'lucide-react';  // Add this import at the top

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-screen-lg mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <i 
            aria-label="Instagram" 
            role="img" 
            style={{
              backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v4/yB/r/E7m8ZCMOFDS.png")',
              backgroundPosition: '0px -52px',
              backgroundSize: 'auto',
              width: '180px',
              height: '53px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block'
            }}
          ></i>
        </Link>

        {/* Search bar (hidden on mobile) */}
        <div className="hidden md:block relative mx-4 flex-1 max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Navigation links */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            <Home size={24} />
          </Link>
          <Link to="/direct" className="text-gray-800 hover:text-gray-600">
            <Send className="h-6 w-6" />
          </Link>
          <Link to="/create" className="text-gray-800 hover:text-gray-600">
            <PlusSquare size={24} />
          </Link>
          <Link to="/explore" className="text-gray-800 hover:text-gray-600">
            <Compass size={24} />
          </Link>
          <Link to="/notifications" className="text-gray-800 hover:text-gray-600">
            <Heart size={24} />
          </Link>
          <Link to="/login" className="text-gray-800 hover:text-gray-600">
            <User size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;