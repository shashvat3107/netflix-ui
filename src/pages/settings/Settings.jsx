import { ArrowBackIosOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import './settings.scss'

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className='settings'>
      <div className="back" onClick={() => navigate('/')}>
        <ArrowBackIosOutlined />
        Home
      </div>
      <div className="container">
        <h1>Account Settings</h1>
        <div className="profile-section">
          <div className="profile-header">
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Profile" />
            <h2>Profile Information</h2>
          </div>
          <div className="info-grid">
            <div className="info-item">
              <label>Name</label>
              <p>John Doe</p>
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>john.doe@example.com</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <p>+1 234 567 8900</p>
            </div>
            <div className="info-item">
              <label>Membership Plan</label>
              <p>Premium</p>
            </div>
            <div className="info-item">
              <label>Billing Cycle</label>
              <p>Monthly</p>
            </div>
            <div className="info-item">
              <label>Next Billing Date</label>
              <p>March 1, 2024</p>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="edit-button">Edit Profile</button>
          <button className="change-plan-button">Change Plan</button>
          <button className="cancel-button">Cancel Membership</button>
        </div>
      </div>
    </div>
  )
} 