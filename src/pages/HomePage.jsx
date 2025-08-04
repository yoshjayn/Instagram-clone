import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { postApi } from '../services/Api';
import { useNavigate} from 'react-router-dom';


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

// Mock data for stories
const mockStories = [
  {
    id: 1,
    username: 'travel_enthusiast',
    userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    hasStory: true,
    viewed: false
  },
  {
    id: 2,
    username: 'foodie_adventures',
    userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    hasStory: true,
    viewed: true
  },
  {
    id: 3,
    username: 'photography_pro',
    userImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    hasStory: true,
    viewed: false
  },
  {
    id: 4,
    username: 'fitness_guru',
    userImage: 'https://randomuser.me/api/portraits/men/75.jpg',
    hasStory: true,
    viewed: false
  },
  {
    id: 5,
    username: 'art_lover',
    userImage: 'https://randomuser.me/api/portraits/women/25.jpg',
    hasStory: true,
    viewed: true
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

const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token)
    if(!token) {
      console.log('token')
      navigate('/signup')
    }
    fetchAllPosts();
  }, []);
  const fetchAllPosts = async () => {
    try {
      const response = await postApi.getFeed();
      if (response.data.success) {
        setAllPosts(response.data.data);
        console.log('line 24', response.data.data)
        // console.log('postsArray',posts)
      }
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };
  const handleLikes = () => {
    // Logic to handle likes
  };

  const userData = getUserData();
  const imgSrc="https://randomuser.me/api/portraits/women/44.jpg"
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex justify-center max-w-screen-lg mx-auto pb-4">
        {/* Main feed */}
        <div className="w-2/3 xl:w-2/3 xl:pr-8 xl:ml-10">
          {/* Stories */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 p-4 overflow-x-auto">
            <div className="flex space-x-4">
              {/* Your story */}
              <div className="flex flex-col items-center space-y-1">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-200 p-0.5">
                    <img
                      src={userData.profileImage || "https://randomuser.me/api/portraits/lego/1.jpg"}
                      alt="Your story"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <span className="text-xs">Your story</span>
              </div>

              {/* Other stories */}
              {mockStories.map((story) => (
                <div key={story.id} className="flex flex-col items-center space-y-1">
                  <div className={`w-16 h-16 rounded-full border-2 p-0.5 ${story.viewed ? 'border-gray-300' : 'border-gradient-instagram'}`}>
                    <img
                      src={story.userImage}
                      alt={story.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span className="text-xs truncate w-16 text-center">{story.username}</span>
                </div>
              ))}
            </div>
          </div>

          {/*Created posts */}

          {allPosts && allPosts.length > 0 ? (
            allPosts.map((post) => (
              // console.log('post caption',post.text) ,
              <div key={post._id} className="bg-white border border-gray-200 rounded-lg mb-6">
                {/* Post header */}
                <div className="flex items-center p-3 border-b border-gray-200">
                  <img
                    src={imgSrc}
                    alt={userData.name || "your_username"}
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <span className="font-semibold text-sm">{userData.name || "your_username"}</span>
                </div>

                {/* Post image */}
                <img
                  src={post.image || 'https://via.placeholder.com/300'}
                  alt={post.text || 'Post'}
                  className="w-full h-full object-cover"
                />
                {/* <p className='text-black-800'>{post.text || 'Caption'}</p> */}
                {/* Post actions */}
                <div className="p-3">
                  <div className="flex space-x-4 mb-2">
                    <Heart className="text-gray-800" size={24} onClick={handleLikes}/>
                    <MessageCircle className="text-gray-800" size={24} />
                    <Send className="text-gray-800" size={24} />
                    <Bookmark className="ml-auto text-gray-800" size={24} />
                  </div>

                  {/* Likes */}
                  <p className="font-semibold text-sm mb-1">{post.likes} likes</p>

                  {/* Caption */}
                  <p className="text-sm mb-1">
                    <span className="font-semibold mr-1">{userData.name}</span>
                    {post.text}
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
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-400">No posts yet.</div>
          )}


          {/*existing posts */}

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
                  <span className="font-semibold mr-1">{userData.name}</span>
                  {typeof post.text === 'object' ? post.text.name : post.text}
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
        <div className="hidden xl:block xl:w-1/3">
          <div className="fixed w-80 pt-4">
            {/* User profile */}
            <div className="flex items-center mb-6">
              <img
                src={imgSrc}
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
