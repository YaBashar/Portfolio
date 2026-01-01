import React from 'react';

const RetireWell = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-purple-500/20 border-2 border-purple-300/50 rounded-lg p-12 mb-8 text-center backdrop-blur-sm">
            <p className="text-purple-100">📷 HERO IMAGE: Full-width mockup showing the app on a phone held by hands</p>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 text-center">
            RetireWell: Reducing Social Isolation for Retirees
          </h1>
          
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            Helping people aged 55+ transition into retirement by discovering community activities
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-16 relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Project Overview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">Project Type</p>
              <p className="text-gray-800">Mobile Application Design</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">Timeline</p>
              <p className="text-gray-800">12 weeks</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">My Role</p>
              <p className="text-gray-800">Lead UX/UI Designer</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">Team</p>
              <p className="text-gray-800 text-sm">Mubashir Hussain, Ashfia Islam, Hao Sun, Abhiraj Desai, Qingchun Liu</p>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">Partners</p>
            <p className="text-gray-800">Northern Sydney Local Health District, Sydney North Health Network, Hornsby Council</p>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">The Problem</h2>
          
          <div className="bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg p-8 mb-8">
            <p className="text-purple-700 font-medium">📷 IMAGE: Infographic showing transition from work to retirement</p>
          </div>
          
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Retirement increases the risk of social isolation and loneliness, but it receives less attention than other factors.
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            Retirement can be exciting, but the transition can also be challenging. People move from a structured work routine to suddenly having a lot of free time.
          </p>
          
          <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800">Why This Matters</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-bold text-gray-800 mb-2">NSLHD</h4>
              <p className="text-gray-700">Loneliness leads to health problems and extra pressure on hospitals</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-3">🏘️</div>
              <h4 className="font-bold text-gray-800 mb-2">Hornsby Council</h4>
              <p className="text-gray-700">The community is ageing and diverse, with wellbeing concerns</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-800 mb-2">PHN</h4>
              <p className="text-gray-700">Connect healthcare with the community through social prescribing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Research & Discovery</h2>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Target Audience</h3>
          <p className="text-lg text-gray-700 mb-4">
            We focused on people aged 55+ in Berowra, Northern Sydney
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50</div>
              <p className="text-gray-700">Survey Participants</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">20</div>
              <p className="text-gray-700">In-depth Interviews</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">9</div>
              <p className="text-gray-700">Partner Consultations</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">7+</div>
              <p className="text-gray-700">Research Papers</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Key Findings</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-800 mb-3">From Research Literature</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 95% reduction in anxiety/depression with chatbots</li>
                <li>• 23% lower mortality rate with sense of purpose</li>
                <li>• Community engagement reduces isolation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-800 mb-3">From User Research</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 85% open to learning AI</li>
                <li>• 80% concerned about privacy</li>
                <li>• Users value voice-to-text input</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Design Process</h2>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Major Iteration</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <h4 className="font-bold text-red-700 mb-3">❌ Before: Clinical Approach</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Module-based learning</li>
                <li>• Professional/medical aesthetic</li>
                <li>• Too directive</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h4 className="font-bold text-green-700 mb-3">✅ After: Community Approach</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Conversational interface</li>
                <li>• Warm, approachable design</li>
                <li>• User-centered</li>
              </ul>
            </div>
          </div>
          
          <p className="text-lg text-gray-700">
            We performed a significant overhaul, removing modules and clinical features, relying on the chatbot to prompt self-reflection at the user's own pace.
          </p>
        </div>
      </div>

      {/* The Solution */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">The Solution</h2>
          
          <p className="text-xl text-gray-800 mb-12">
            RetireWell is a person-centered app that helps users aged 55+ transition into retirement by discovering community activities.
          </p>
          
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Core Features</h3>
          
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="text-5xl">💬</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">1. AI Chatbot</h4>
                <p className="text-gray-700 mb-4">
                  The primary interface for natural conversation and reflection.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-green-800"><strong>User Validation:</strong> 83% found this helpful</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-2 border-yellow-400">
            <div className="flex items-start gap-6">
              <div className="text-5xl">⭐</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">2. Value Discovery - Unique Feature</h4>
                <p className="text-gray-700 mb-4">
                  Helps users identify personal values and suggests micro-activities. Stems from Acceptance and Commitment Therapy.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-green-800"><strong>User Validation:</strong> 83% found this helpful</p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-gray-800"><strong>Why it matters:</strong> None of the existing apps incorporated this feature</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="text-5xl">🗺️</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">3. Community Activity Recommendations</h4>
                <p className="text-gray-700 mb-4">
                  Personalized suggestions based on value discovery, with filtering by distance and interests.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-green-800"><strong>User Validation:</strong> 97% found this helpful</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="text-5xl">📝</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">4. Reflection & Activity Logging</h4>
                <p className="text-gray-700 mb-4">
                  Users log activities and reflect. The app categorizes into Achievement, Closeness, and Enjoyment.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-green-800"><strong>User Validation:</strong> 93% found this helpful</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="text-5xl">🎁</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">5. Point Exchange Reward System</h4>
                <p className="text-gray-700 mb-4">
                  Users earn points for completing activities and exchange them for rewards like coffee vouchers.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-green-800"><strong>User Validation:</strong> 87% found this motivating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Decisions */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Design Decisions</h2>
          
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Visual Design Principles</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-20 bg-purple-500 rounded mb-3"></div>
              <p className="font-semibold text-gray-800">Soft Purples</p>
              <p className="text-sm text-gray-600">Calming and trustworthy</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-20 bg-indigo-700 rounded mb-3"></div>
              <p className="font-semibold text-gray-800">Dark Blues</p>
              <p className="text-sm text-gray-600">Professional</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-20 bg-red-500 rounded mb-3"></div>
              <p className="font-semibold text-gray-800">Red Accents</p>
              <p className="text-sm text-gray-600">Draws attention</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-lg font-semibold text-gray-800 mb-4">Research-Informed Decisions:</p>
            <ul className="space-y-3">
              <li className="text-gray-700">• Large, accessible UI elements for older adults</li>
              <li className="text-gray-700">• Dark text on light backgrounds for readability</li>
              <li className="text-gray-700">• Conversational AI reduces loneliness by 95%</li>
              <li className="text-gray-700">• Activity scheduling from CBT principles</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Impact & Outcomes</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl font-bold mb-2">97%</div>
              <p className="text-lg">Found activities helpful</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl font-bold mb-2">85%+</div>
              <p className="text-lg">Positive validation</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Key Takeaways</h3>
          <ul className="space-y-3 text-lg">
            <li>• Evidence-based design created 83-97% positive validation</li>
            <li>• Iteration led to person-centered solution</li>
            <li>• Accessibility matters for older adults</li>
            <li>• Trust is critical for AI adoption</li>
            <li>• Prevention over intervention</li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-6">Want to learn more about this project?</p>
          <p className="text-purple-400">a.sunami@student.unsw.edu.au</p>
        </div>
      </div>
    </div>
  );
};

export default RetireWell;