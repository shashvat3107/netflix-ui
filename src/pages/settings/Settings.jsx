import { ArrowBackIosOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import './settings.scss'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'

export default function Settings() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleEdit = () => {
    setEditMode(true);
    setName(user?.name || '');
    setPhone(user?.phone || '');
    setError('');
  };

  const handleCancel = () => {
    setEditMode(false);
    setName(user?.name || '');
    setPhone(user?.phone || '');
    setError('');
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      await updateProfile(name, phone);
      setEditMode(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

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
              {editMode ? (
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
              ) : (
                <p>{user?.name || 'No name set'}</p>
              )}
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>{user?.email || 'No email'}</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              {editMode ? (
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
              ) : (
                <p>{user?.phone || 'No phone set'}</p>
              )}
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
          {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
        </div>
        <div className="actions">
          {editMode ? (
            <>
              <button className="edit-button" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
              <button className="cancel-button" onClick={handleCancel} disabled={saving}>Cancel</button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
          )}
          <button className="change-plan-button">Change Plan</button>
          <button className="cancel-button">Cancel Membership</button>
        </div>
      </div>
    </div>
  )
} 