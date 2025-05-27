Step 1: Project Setup and Basic Structure
Step 2: Add Basic Routing and Create Login/Signup Forms
Step 3: Create Navbar and Basic Home Layout
Step 4: Convert to Tailwind CSS 4

# DRAFT-1 (routing for login/signup form on profile icon click)

1. **Project Setup and Structure**
- Created a React project using Vite
- Implemented TailwindCSS for styling
- Set up React Router for navigation
- Organized project structure with components, pages, and services directories

2. **Authentication Pages**
- Created <mcfile name="Login.jsx" path="src/components/auth/Login.jsx"></mcfile> component with:
  - Email/password login form
  - Facebook login option
  - "Forgot password" link
  - Mobile app download links
- Implemented <mcfile name="Signup.jsx" path="src/components/auth/Signup.jsx"></mcfile> with:
  - Email/phone registration form
  - Facebook signup option
  - Terms and policies links

3. **Main Layout and Navigation**
- Developed <mcfile name="Navbar.jsx" path="src/components/layout/Navbar.jsx"></mcfile> featuring:
  - Instagram logo
  - Search bar (hidden on mobile)
  - Navigation icons (Home, Messages, Create, Explore, Notifications, Profile)
  - Responsive design

4. **Homepage Features**
- Built <mcfile name="HomePage.jsx" path="src/pages/HomePage.jsx"></mcfile> with:
  - Stories section with circular avatars
  - Post feed with mock data
  - Like, comment, share, and bookmark actions
  - Sidebar with:
    - User profile
    - Suggested accounts
    - Footer links

**Customizations:**
1. Navbar positioning and Instagram logo sizing
2. Sidebar positioning fix (added `top-[60px]` and `pt-4` to prevent navbar overlap)
3. Responsive layout implementation (mobile and desktop views)
4. Mock data integration for posts and suggestions

The project currently has a solid foundation with the main Instagram features implemented in the UI, though it's still using mock data and needs backend integration for full functionality.


# ###################################################################################################   

Step 5: Add State Management and Basic API Integration

# DRAFT-2 
<!-- Use cookies instead of local storage during interceptors --> ah that can only be done if the apis are written by you :)

**Authentication Flow:**
* Fixed signup form validation
  - Added validation for all required fields
  - Implemented email/phone format validation

**User Data Management:**
* Implemented localStorage handling
  - Added user data storage during signup
  - Added token storage after successful signup
  - Added safe getUserData() function with error handling

**Navigation Updates:**
* Enhanced Navbar functionality
  - Added More menu dropdown
  - **Implemented logout functionality**
  - Added user profile section
  - Added navigation links for all main features

**HomePage Improvements:**
* Added user profile display
  - Shows user's name and email from localStorage
  - Added proper error handling for localStorage data

Error Handling:
* Improved error management
  - Added try-catch blocks for data parsing
  - Added fallback values for missing data
  - Fixed JSON parsing issues in user data retrieval

API Integration:
* Enhanced API communication
  - Implemented token-based authentication




