import React, { useState } from "react";

const Signup = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!emailOrPhone) {
      setError("Please enter your mobile number or email.");
      setIsLoading(false);
      return;
    }

    setError("");
    console.log("Signing up with:", { emailOrPhone });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 sm:p-10 rounded-lg border border-gray-300 w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <i 
            data-visualcompletion="css-img" 
            aria-label="Instagram" 
            role="img" 
            style={{
              backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v4/yB/r/E7m8ZCMOFDS.png")',
              backgroundPosition: '0px -52px',
              backgroundSize: 'auto',
              width: '175px',
              height: '51px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block'
            }}
          ></i>
        </div>

        <p className="text-center text-gray-500 font-medium mb-6">
          Sign up to see photos and videos from your friends.
        </p>

        {error && (
          <div className="mb-4 p-2 text-center text-sm text-white bg-red-500 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="button"
            className="w-full py-1.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded transition flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
            Log in with Facebook
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="mx-4 text-sm text-gray-500">OR</div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Mobile Number or Email"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-1.5 text-sm font-medium text-white rounded ${isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition`}
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-blue-900">Learn More</a>
        </p>

        <p className="text-xs text-gray-500 text-center mt-4">
          By signing up, you agree to our <a href="#" className="text-blue-900">Terms</a>, <a href="#" className="text-blue-900">Privacy Policy</a> and <a href="#" className="text-blue-900">Cookies Policy</a>.
        </p>
      </div>

      <div className="bg-white p-4 mt-3 border border-gray-300 w-full max-w-sm text-center text-sm">
        Have an account? <a href="/login" className="text-blue-500 font-medium">Log in</a>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">Get the app.</p>
        <div className="flex justify-center space-x-2 mt-2">
          <a href="#">
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="App Store" className="h-10"/>
          </a>
          <a href="#">
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="Google Play" className="h-10"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;