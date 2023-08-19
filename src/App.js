
import './App.css';
import Login from './Component/login';
import image from './img/icons8-waving-hand-emoji-48.png';

function App() {
  return (
    <div className='main'>
      <div className='all-container'>
    <div className="container">
      <div className='welcome'>Welcome Back! <img className="icon" src={image}></img></div>
      <div  className="sign-para">Sign in to your account</div>
      <div><Login/></div>
      <div className='forgot'>Forgot your password?</div>
    </div>
    <div className='no-account'>Don't have an account? <a href='#'>Sign up</a></div>
    </div>
    </div>
  );
}

export default App;
