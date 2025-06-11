import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Settings } from 'react-feather';
import { userApi,postApi } from '../services/Api';
import { instance } from "../services/Api";
import PostModal from '../components/post/PostModal';


const ProfilePage = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchUserProfile();
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    try {
      const response = await postApi.getMyPosts();
      if (response.data.success) {
        setPosts(response.data.data);
        console.log('line 24',response.data.data) 
        // console.log('postsArray',posts)
      }
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  const fetchUserProfile = async () => {
    try {

        //my trial
        const data = localStorage.getItem('userData');
        const parsedData = JSON.parse(data);
        console.log(parsedData);
        console.log(parsedData.name);
        console.log(parsedData["_id"]);



      const response = await userApi.getProfile(parsedData["_id"]);
      console.log('Profile response:', response); // Add this line
      if (response.data.success) {
        setProfile(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error('Profile fetch error:', err); // Add this line
      setError('Failed to fetch profile');
    } finally {
      setLoading(false);
    }
};

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
  }

  const imgSrc="https://randomuser.me/api/portraits/women/44.jpg"

  return (
    <div className="max-w-5xl mx-auto pt-16 px-4">
      <div className="flex items-start mb-8">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mr-10">
          <img
            // src={profile?.profilePicture || 'https://via.placeholder.com/150'}
            src={imgSrc}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-normal mr-4">{profile?.name}</h2>
            <button 
              className="px-4 py-1.5 bg-gray-100 rounded-lg font-medium text-sm mr-2"
              onClick={() => navigate('/edit-profile')}
            >
              Edit profile
            </button>
            <button className="p-2 bg-gray-100 rounded-lg">
              <Settings size={20} />
            </button>
          </div>

          <div className="flex items-center space-x-10 mb-4">
            <span><strong>{posts.length}</strong> posts</span>
            <span><strong>0</strong> followers</span>
            <span><strong>0</strong> following</span>
          </div>

          <div>
            <h1 className="font-medium mb-1">{profile?.name}</h1>
            <p className="text-gray-600">{profile?.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="flex justify-center space-x-16">
          <button className="border-t border-black pt-4 text-sm font-medium flex items-center">
            <Grid size={12} className="mr-2" />
            POSTS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 mt-4">
        {posts.reverse() && posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="w-full aspect-square overflow-hidden cursor-pointer"
              onClick={() => { setSelectedPost(post); setModalOpen(true); }}
            >
              <img
                src={post.image || 'https://via.placeholder.com/300'}
                alt={post.text || 'Post'}
                className="w-full h-full object-cover"
              />
              <p className='text-black-800'>{post.text || 'Caption'}</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-400">No posts yet.</div>
        )}
        <PostModal open={modalOpen} onClose={() => setModalOpen(false)} post={selectedPost} />
      </div>
    </div>
  );
};




export default ProfilePage;