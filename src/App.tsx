import React, { useState } from 'react'
import './App.css'

const TelegramLogo: React.FC = () => (
  <svg width="160" height="160" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#29B6F6"/>
    <path d="M45 50L55 40L50 55L55 60L45 50Z" fill="white"/>
  </svg>
)

const App: React.FC = () => {
  const [country, setCountry] = useState('Indonesia')
  const [phoneNumber, setPhoneNumber] = useState('+62')
  const [keepSignedIn, setKeepSignedIn] = useState(false)

  return (
    <div className="app">
      <div className="login-container">
        <TelegramLogo />
        <h1>Telegram</h1>
        <p>Please confirm your country code and enter your phone number.</p>
        <div className="input-group">
          <label>Country</label>
          <select 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Indonesia">Indonesia</option>
          </select>
        </div>
        <div className="input-group">
          <label>Your phone number</label>
          <input 
            type="tel" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="keepSignedIn" 
            checked={keepSignedIn}
            onChange={(e) => setKeepSignedIn(e.target.checked)}
          />
          <label htmlFor="keepSignedIn">Keep me signed in</label>
        </div>
        <button className="qr-button">LOG IN BY QR CODE</button>
      </div>
    </div>
  )
}

export default App
