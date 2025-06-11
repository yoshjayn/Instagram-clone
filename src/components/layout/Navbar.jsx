import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, User, MessageCircle, Compass, Settings, Activity, Bookmark, Moon } from 'react-feather';
import { Send } from 'lucide-react';

const Navbar = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <nav className="hidden lg:block fixed top-0 left-0 w-[245px] h-screen bg-white border-r border-gray-200 z-50 px-3 py-8">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <Link to="/" className="mb-3 pl-3">
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

        {/* Navigation links */}
        <div className="flex flex-col space-y-2">
          <Link to="/" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <Home size={24} />
            <span className="text-base">Home</span>
          </Link>
          
          {/* <Link to="/search" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <Search size={24} />
            <span className="text-base">Search</span>
          </Link>
          
          <Link to="/explore" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <Compass size={24} />
            <span className="text-base">Explore</span>
          </Link>
          
          <Link to="/reels" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <svg aria-label="Reels" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
              <path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path>
            </svg>
            <span className="text-base">Reels</span>
          </Link>
          
          <Link to="/messages" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <MessageCircle size={24} />
            <span className="text-base">Messages</span>
          </Link>
          
          <Link to="/notifications" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <Heart size={24} />
            <span className="text-base">Notifications</span>
          </Link> */}
          
          <Link to="/create" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <PlusSquare size={24} />
            <span className="text-base">Create</span>
          </Link>
          
          <Link to="/profile" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100">
            <User size={24} />
            <span className="text-base">Profile</span>
          </Link>
        </div>

        {/* More menu at bottom */}
        <div className="mt-auto relative">
          <button 
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 w-full"
          >
            <svg aria-label="Settings" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="4" y2="4"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="12" y2="12"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="20" y2="20"></line>
            </svg>
            <span className="text-base">More</span>
          </button>

          {/* Dropdown Menu */}
          {showMoreMenu && (
            <div className="absolute bottom-16 left-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              {/* <Link to="/settings" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
              
              <Link to="/your-activity" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100">
                <Activity size={20} />
                <span>Your activity</span>
              </Link>
              
              <Link to="/saved" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100">
                <Bookmark size={20} />
                <span>Saved</span>
              </Link> */}
              
              <button className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100 w-full">
                <Moon size={20} />
                <span>Switch appearance</span>
              </button>
              
              <Link to="/report" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100">
                <span>Report a problem</span>
              </Link>
              
              <Link to="/switch-accounts" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100">
                <span>Switch accounts</span>
              </Link>
              
              <hr className="my-2" />
              
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100 w-full"
              >
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;