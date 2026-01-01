import React from 'react'

const DesignProcess = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-5">
          <h2 className="text-3xl font-bold mb-2">Design Process</h2>
          
          <h3 className="text-xl font-bold mb-2">Major Iteration</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <h4 className="font-bold text-red-700 mb-3">❌ Before: Clinical Approach</h4>
              <ul className="space-y-2 ">
                <li>• Module-based learning</li>
                <li>• Professional/medical aesthetic</li>
                <li>• Too directive</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h4 className="font-bold text-green-700 mb-3">✅ After: Community Approach</h4>
              <ul className="space-y-2 ">
                <li>• Conversational interface</li>
                <li>• Warm, approachable design</li>
                <li>• User-centered</li>
              </ul>
            </div>
          </div>

          <p className="text-lg ">
            We performed a significant overhaul, removing modules and clinical features, relying on the chatbot to prompt self-reflection at the user's own pace.
          </p>
        </div>
  )
}

export default DesignProcess