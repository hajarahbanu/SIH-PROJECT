/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Folder, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Folders = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const targetFolders = [
    { 
      id: 1, 
      name: 'windows_10_cmake_Release_Graphviz-12.1.0-win32.zip', 
      status: 'Scanned',
      threat: 'tlec3b23e3f54',
      dateUploaded: '01/09/2024 1:52 PM',
      size: '15.2 MB'
    }
  ];

  const cleanFolders = [
    { 
      id: 1, 
      name: 'clean_file_example.zip', 
      status: 'Clean',
      dateUploaded: '01/09/2024 2:30 PM',
      size: '10.1 MB'
    }
  ];

  const sortFolders = (folders) => {
    return [...folders].sort((a, b) => {
      const compareValue = sortOrder === 'asc' ? 1 : -1;
      if (a[sortBy] < b[sortBy]) return -1 * compareValue;
      if (a[sortBy] > b[sortBy]) return 1 * compareValue;
      return 0;
    });
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const FolderTable = ({ folders, title, description, showNewFolder = false }) => (
    <div className="mb-8">
      <div className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {showNewFolder && (
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-purple-600 text-white hover:bg-purple-700"
          >
            New Folder
          </button>
        )}
      </div>
      <div className="rounded-md border">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="h-10 px-4 text-left align-middle font-medium">
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleSort('name')}
                >
                  <span>Item</span>
                  {sortBy === 'name' && (
                    <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="h-10 px-4 text-left align-middle font-medium">
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleSort('dateUploaded')}
                >
                  <span>Date Uploaded</span>
                  {sortBy === 'dateUploaded' && (
                    <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="h-10 px-4 text-left align-middle font-medium">
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleSort('status')}
                >
                  <span>Status</span>
                  {sortBy === 'status' && (
                    <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="h-10 px-4 text-left align-middle font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortFolders(folders).map((folder) => (
              <tr key={folder.id} className="border-b">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Folder className="h-4 w-4 text-purple-600" />
                    <span>{folder.name}</span>
                  </div>
                </td>
                <td className="p-4">{folder.dateUploaded}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    folder.status === 'Clean' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {folder.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <FolderTable 
        folders={targetFolders}
        title="Target Folder"
        description="Manage and monitor your target folders"
        showNewFolder={true}
      />
      <FolderTable 
        folders={cleanFolders}
        title="Clean Folder"
        description="View and manage your clean folders"
        showNewFolder={false}
      />
    </div>
  );
};

export default Folders;