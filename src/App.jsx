// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'  
import SignupPage from './pages/SignupPage'
import DefaultPage from './pages/DefaultPage'
import ProfilePage from './pages/ProfilePage'
import CreatePostPage from './components/post/CreatePostPage';
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/chat" element={<ChatPage />} />

      </Routes>
    </Router>
  )
}

export default App