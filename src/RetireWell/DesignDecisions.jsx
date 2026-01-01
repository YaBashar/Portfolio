import React from 'react'

const DesignDecisions = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-5">
          <h2 className="text-3xl font-bold mb-3">Design Decisions</h2>
          <h3 className="text-xl font-bold mb-2">Visual Design Principles</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-20 bg-purple-500 rounded mb-3"></div>
              <p className="font-semibold">Soft Purples</p>
              <p className="text-sm ">Calming and trustworthy</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-20 bg-indigo-700 rounded mb-3"></div>
              <p className="font-semibold">Dark Blues</p>
              <p className="text-sm ">Professional</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-20 bg-red-500 rounded mb-3"></div>
              <p className="font-semibold">Red Accents</p>
              <p className="text-sm ">Draws attention</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl shadow-md p-4">
            <p className="text-xl font-semibold mb-2">Research-Informed Decisions</p>
            <ul className="space-y-2.5">
              <li>• Large, accessible UI elements for older adults</li>
              <li>• Dark text on light backgrounds for readability</li>
              <li>• Conversational AI reduces loneliness by 95%</li>
              <li>• Activity scheduling from CBT principles</li>
            </ul>
          </div>
      </div>
  )
}

export default DesignDecisions