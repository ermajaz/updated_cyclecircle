import React,{useState} from 'react'
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import LoginPage from './LoginPage';

function ResetComplete({onClose}) {
  const [isComplete, setIsComplete] = useState(false);

  const handleIsComplete = () => {
    // Add logic to handle password reset
    // For now, let's simulate password reset by setting passwordReset to true
    setIsComplete(true);
  };
  return (
    <>
    {!isComplete ? (
      <div className="reset-complete-container">
      <div className="close-icon" onClick={onClose}>
        <CloseSharpIcon />
      </div>
      <iframe
        src="https://giphy.com/embed/QJ4Hm8oJgMJIqFAuVc"
        title="resetPassword"
        width="50"
        height="50"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <h2>Password reset complete</h2>
      <p style={{ fontSize: "1rem" }}>
        Your password reset was successful. You can now proceed to login to your account
      </p>
      <button className="go-to-login-btn" onClick={handleIsComplete}>Go to login</button>
    </div>
    ):(
      <LoginPage onClose={onClose}/>
    )}
    </>
  )
}

export default ResetComplete