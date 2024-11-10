/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react'

const Folders = () => {
  const folders = [
    { id: 1, name: 'Documents', files: 23, lastModified: '2024-03-15' },
    { id: 2, name: 'Images', files: 145, lastModified: '2024-03-14' },
    { id: 3, name: 'Projects', files: 67, lastModified: '2024-03-13' },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Folders</h1>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          New Folder
        </button>
      </div>
      
      <div className="grid gap-4">
        {folders.map(folder => (
          <div key={folder.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{folder.name}</h3>
                  <p className="text-sm text-gray-500">{folder.files} files · Last modified {folder.lastModified}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Folders