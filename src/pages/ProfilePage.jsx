import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Settings } from 'react-feather';
import { userApi } from '../services/Api';
import { instance } from "../services/Api";


const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile();
  }, []);

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

  return (
    <div className="max-w-5xl mx-auto pt-16 px-4">
      <div className="flex items-start mb-8">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mr-10">
          <img
            src={profile?.profilePicture || 'https://via.placeholder.com/150'}
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
            <span><strong>0</strong> posts</span>
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
        {/* Posts will be mapped here when available */}
      </div>
    </div>
  );
};

export default ProfilePage;