import React from 'react'

const Impact = () => {
  return (
    <div className="bg-linear-to-br from-purple-600 to-indigo-700 text-white mb-10 p-4 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Impact & Outcomes</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-5xl font-bold mb-2">97%</div>
              <p className="text-lg">Found activities helpful</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-5xl font-bold mb-2">85%+</div>
              <p className="text-lg">Positive validation</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
          <ul className="space-y-2 text-lg">
            <li>• Evidence-based design created 83-97% positive validation</li>
            <li>• Iteration led to person-centered solution</li>
            <li>• Accessibility matters for older adults</li>
            <li>• Trust is critical for AI adoption</li>
            <li>• Prevention over intervention</li>
          </ul>
        </div>
  )
}

export default Impact