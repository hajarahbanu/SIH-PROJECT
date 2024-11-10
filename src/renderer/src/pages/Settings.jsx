/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react'

const Settings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Profile Settings</h3>
          <p className="text-gray-600 mb-4">Manage your account information and preferences.</p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Edit Profile
          </button>
        </div>
        
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Notification Settings</h3>
          <p className="text-gray-600 mb-4">Configure your notification preferences.</p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Manage Notifications
          </button>
        </div>
        
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Security Settings</h3>
          <p className="text-gray-600 mb-4">Update your security preferences and password.</p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Security Options
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings