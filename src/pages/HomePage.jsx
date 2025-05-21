import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    username: 'travel_enthusiast',
    userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    caption: 'Beautiful mountain view during my hike today! #nature #adventure',
    likes: 243,
    comments: 12,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    username: 'foodie_adventures',
    userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    caption: 'Homemade pasta for dinner tonight 🍝 #foodie #homecooking',
    likes: 189,
    comments: 8,
    timestamp: '5 hours ago'
  }
];

// Mock data for suggestions
const mockSuggestions = [
  {
    id: 1,
    username: 'photography_pro',
    relation: 'Followed by user123 + 3 more',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 2,
    username: 'fitness_guru',
    relation: 'New to Instagram',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 3,
    username: 'art_lover',
    relation: 'Followed by user456',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg'
  }
];

// Replace the direct localStorage.getItem with parsed version
const getUserData = () => {
  try {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error parsing user data:', error);
    return {};
  }
};

const userData = getUserData();

const HomePage = () => {
  return (
    
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="max-w-screen-lg mx-auto pb-4 px-4 flex">
        {/* Main feed */}
        <div className="w-full md:w-2/3 md:pr-8">
          {/* Stories (optional) */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 p-4 overflow-x-auto">
            <div className="flex space-x-4">
              {/* Story circles would go here */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex flex-col items-center space-y-1">
                  <div className="w-16 h-16 rounded-full border-2 border-pink-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-200"></div>
                  </div>
                  <span className="text-xs">username</span>
                </div>
              ))}
            </div>
          </div>

          {/* Posts */}
          {mockPosts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-lg mb-6">
              {/* Post header */}
              <div className="flex items-center p-3 border-b border-gray-200">
                <img 
                  src={post.userImage} 
                  alt={post.username}
                  className="w-8 h-8 rounded-full object-cover mr-3"
                />
                <span className="font-semibold text-sm">{post.username}</span>
              </div>
              
              {/* Post image */}
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full object-cover"
              />
              
              {/* Post actions */}
              <div className="p-3">
                <div className="flex space-x-4 mb-2">
                  <Heart className="text-gray-800" size={24} />
                  <MessageCircle className="text-gray-800" size={24} />
                  <Send className="text-gray-800" size={24} />
                  <Bookmark className="ml-auto text-gray-800" size={24} />
                </div>
                
                {/* Likes */}
                <p className="font-semibold text-sm mb-1">{post.likes} likes</p>
                
                {/* Caption */}
                <p className="text-sm mb-1">
                  <span className="font-semibold mr-1">{post.username}</span>
                  {post.caption}
                </p>
                
                {/* Comments */}
                <button className="text-gray-500 text-sm mb-1">
                  View all {post.comments} comments
                </button>
                
                {/* Timestamp */}
                <p className="text-gray-400 text-xs uppercase">{post.timestamp}</p>
              </div>
              
              {/* Add comment */}
              <div className="border-t border-gray-200 p-3 flex">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 text-sm focus:outline-none"
                />
                <button className="text-blue-500 font-semibold text-sm">Post</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block md:w-1/3">
          <div className="fixed w-80 pt-4">
            {/* User profile */}
            <div className="flex items-center mb-6">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Current user"
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-sm">{userData.name || "your_username"}</p>
                <p className="text-gray-400 text-sm">{userData.email || "Your Name"}</p>
              </div>
            </div>
            
            {/* Suggestions */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 font-semibold text-sm">Suggestions For You</span>
                <button className="text-xs font-semibold">See All</button>
              </div>
              
              {mockSuggestions.map((user) => (
                <div key={user.id} className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <img 
                      src={user.avatar} 
                      alt={user.username}
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-semibold text-sm">{user.username}</p>
                      <p className="text-gray-400 text-xs">{user.relation}</p>
                    </div>
                  </div>
                  <button className="text-blue-500 text-xs font-semibold">Follow</button>
                </div>
              ))}
            </div>
            
            {/* Footer links */}
            <div className="text-xs text-gray-400">
              <div className="mb-4">
                <a href="#" className="mr-2">About</a>
                <a href="#" className="mr-2">Help</a>
                <a href="#" className="mr-2">Press</a>
                <a href="#" className="mr-2">API</a>
                <a href="#" className="mr-2">Jobs</a>
                <a href="#" className="mr-2">Privacy</a>
                <a href="#" className="mr-2">Terms</a>
                <a href="#" className="mr-2">Locations</a>
              </div>
              <p>© 2023 INSTAGRAM CLONE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;