import React, { useContext } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { UserContext } from '../Context/Context';
import GoogleLogin_function from './GoogleLogin'
function App() {
  const {show,SetShow} =useContext(UserContext)
  const handleLogin = async(response) => {
     await GoogleLogin_function(response,SetShow)
     };

  return (
    <GoogleOAuthProvider clientId="653997893799-lsh0ni5u8gaa2t7ci548an87479kkf9m.apps.googleusercontent.com">
      <div className="App">
        <GoogleLogin 
          onSuccess={handleLogin}
          className='border border-2' 
          onError={() => console.log('Login Failed')} 
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

