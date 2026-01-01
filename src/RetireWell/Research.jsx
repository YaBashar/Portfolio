import React from 'react'

const Research = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Research & Discovery</h2>
          
          <h3 className="text-2xl font-bold mb-2">Target Audience</h3>
          <p className="text-lg  mb-2">
            We focused on people aged 55+ in Berowra, Northern Sydney
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50</div>
              <p className="text-lg">Survey Participants</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">20</div>
              <p className="text-lg">In-depth Interviews</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <p className="text-lg">Partner Consultations</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">7+</div>
              <p className="text-lg">Research Papers</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 ">Key Findings</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold mb-3">From Research Literature</h4>
              <ul className="space-y-2 ">
                <li>• 95% reduction in anxiety/depression with chatbots</li>
                <li>• 23% lower mortality rate with sense of purpose</li>
                <li>• Community engagement reduces isolation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-800 mb-3">From User Research</h4>
              <ul className="space-y-2 ">
                <li>• 85% open to learning AI</li>
                <li>• 80% concerned about privacy</li>
                <li>• Users value voice-to-text input</li>
              </ul>
            </div>
          </div>
      </div>

  )
}

export default Research