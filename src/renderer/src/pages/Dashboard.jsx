/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Shield } from 'lucide-react';

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium ${
      active 
        ? 'text-purple-600 border-b-2 border-purple-600' 
        : 'text-gray-600 hover:text-gray-800'
    }`}
  >
    {children}
  </button>
);

const DetectionContent = () => (
  <div className="p-4">
    <div className="mb-6">
      <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
        <div className="font-medium">Windows Defender</div>
        <span className="px-3 py-1 text-sm text-red-600 bg-red-100 rounded-full">
          Detected
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
        <div className="font-medium">ESET</div>
        <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full">
          Clean
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
        <div className="font-medium">Trend Micro</div>
        <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full">
          Clean
        </span>
      </div>
    </div>
  </div>
);

const DetailsContent = () => (
  <div className="p-4">
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-medium mb-4">BASIC PROPERTIES</h3>
      <div className="space-y-2 text-sm">
        <div className="flex">
          <span className="w-24 text-gray-500">SHA-1</span>
          <span className="text-gray-700">d4e5f6...</span>
        </div>
        <div className="flex">
          <span className="w-24 text-gray-500">FILE SIZE</span>
          <span className="text-gray-700">1024 KB</span>
        </div>
        <div className="flex">
          <span className="w-24 text-gray-500">FILE TYPE</span>
          <span className="text-gray-700">OFFICE OPEN XML DOCUMENT</span>
        </div>
      </div>
    </div>
  </div>
);

const ScanHistoryContent = () => (
  <div className="p-4">
    <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">File name</th>
            <th className="text-left p-3">Windows Defender</th>
            <th className="text-left p-3">ESET</th>
            <th className="text-left p-3">Trend Micro</th>
            <th className="text-left p-3">File path</th>
            <th className="text-left p-3">Last scanned</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">av_scan.py</td>
            <td className="p-3">Clean</td>
            <td className="p-3">Clean</td>
            <td className="p-3">Clean</td>
            <td className="p-3">C:\Users\app\pol...</td>
            <td className="p-3">12-05-2024</td>
          </tr>
          <tr>
            <td className="p-3">SCAN.txt</td>
            <td className="p-3">Detected</td>
            <td className="p-3">Detected</td>
            <td className="p-3">Detected</td>
            <td className="p-3">C:\Users\test...</td>
            <td className="p-3">11-05-2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const RiskMetrics = () => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-medium">Current Risk</h3>
      <div className="bg-purple-100 rounded-lg p-4 w-32">
        <div className="text-center">
          <div className="text-xl font-bold text-purple-600">741</div>
          <div className="text-sm text-purple-600">Score</div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-4">
      <div className="text-center">
        <div className="bg-purple-100 rounded-lg p-3 mb-2">
          <Shield className="w-5 h-5 text-purple-600 mx-auto" />
        </div>
        <div className="text-lg font-bold">132%</div>
        <div className="text-sm text-gray-500">Known Threats</div>
      </div>
      <div className="text-center">
        <div className="bg-purple-100 rounded-lg p-3 mb-2">
          <Shield className="w-5 h-5 text-purple-600 mx-auto" />
        </div>
        <div className="text-lg font-bold">16%</div>
        <div className="text-sm text-gray-500">File Risk</div>
      </div>
      <div className="text-center">
        <div className="bg-purple-100 rounded-lg p-3 mb-2">
          <Shield className="w-5 h-5 text-purple-600 mx-auto" />
        </div>
        <div className="text-lg font-bold">43%</div>
        <div className="text-sm text-gray-500">Image Risk</div>
      </div>
      <div className="text-center">
        <div className="bg-purple-100 rounded-lg p-3 mb-2">
          <Shield className="w-5 h-5 text-purple-600 mx-auto" />
        </div>
        <div className="text-lg font-bold">7%</div>
        <div className="text-sm text-gray-500">Doc Risk</div>
      </div>
      <div className="text-center">
        <div className="bg-purple-100 rounded-lg p-3 mb-2">
          <Shield className="w-5 h-5 text-purple-600 mx-auto" />
        </div>
        <div className="text-lg font-bold">66%</div>
        <div className="text-sm text-gray-500">File Risk</div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('detection');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* Risk Metrics - Now at the top */}
        <div className="mb-6">
          <RiskMetrics />
        </div>

        {/* Tabbed Content - Now below risk metrics */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="border-b px-4">
            <div className="flex space-x-8">
              <TabButton
                active={activeTab === 'detection'}
                onClick={() => setActiveTab('detection')}
              >
                DETECTION
              </TabButton>
              <TabButton
                active={activeTab === 'details'}
                onClick={() => setActiveTab('details')}
              >
                DETAILS
              </TabButton>
              <TabButton
                active={activeTab === 'scanHistory'}
                onClick={() => setActiveTab('scanHistory')}
              >
                SCAN HISTORY
              </TabButton>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'detection' && <DetectionContent />}
          {activeTab === 'details' && <DetailsContent />}
          {activeTab === 'scanHistory' && <ScanHistoryContent />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;