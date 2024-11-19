/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Card from '../components/Card'
import { Shield, Cog, LineChart, FileSearch } from 'lucide-react'
import logol from '../assets/file_scan_logo.png'

const Home = () => {
  const [activeTab, setActiveTab] = useState('FILE')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle file submission here
    console.log('File submitted:', selectedFile)
  }

  const tabs = ['FILE', 'FOLDER']

  return (
    <div className="max-w-5xl mx-auto">
      {/* Upload Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-8 py-2 font-medium transition-all border-b-2 ${
                activeTab === tab
                  ? 'text-purple-600 border-purple-600'
                  : 'text-gray-500 border-transparent hover:text-purple-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Upload Area */}
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 mb-4 flex items-center justify-center">
              <img
                src={logol}
                alt="File Scan Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error('Error loading logo:', e)
                  e.target.style.display = 'none'
                  const fallbackIcon = e.target.parentNode.querySelector('.fallback-icon')
                  if (fallbackIcon) {
                    fallbackIcon.style.display = 'flex'
                  }
                }}
              />
              <div className="fallback-icon hidden absolute inset-0 items-center justify-center text-purple-600">
                <FileSearch size={48} />
              </div>
            </div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-700 transition-colors"
            >
              Choose file
            </label>
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>

          {/* Terms and Privacy Notice */}
          <p className="text-sm text-gray-600 mb-4">
            By submitting data above, you are agreeing to our{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Privacy Notice
            </a>
            , and to the{' '}
            <a href="#" className="text-purple-600 hover:underline">
              sharing of your Sample submission with the security community
            </a>
            .
          </p>

          <button
            type="submit"
            disabled={!selectedFile}
            className={`px-6 py-2 rounded-md transition-colors ${
              selectedFile 
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={<Shield size={24} />}
          title="See how safe you are online"
          description="Check the strength of your protection with a quick assessment."
        />
        <Card
          icon={<Cog size={24} />}
          title="Fix security weak spots"
          description="Simple instructions make it easy to set up protection and fix gaps."
        />
        <Card
          icon={<LineChart size={24} />}
          title="Improve your security"
          description="Personalized feedback helps you achieve and maintain healthy online protection."
        />
      </div>
    </div>
  )
}

export default Home