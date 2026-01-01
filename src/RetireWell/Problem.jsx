import React from 'react'

const Problem = () => {
  return (

    <>
        <p className="text-xl text-center p-4 font-semibold rounded-xl bg-pinkish shadow-2xl">
            How might we reduce social isolation & loneliness within the Northern Sydney Local Health District using digital solutions
            and/or AI?
        </p>
        
        <div className="my-5 bg-white p-4 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 mb-2">
                Our team decided to focus on retirees aged 55 and above, a group particularly vulnerable to social isolation.
                <br></br>
                
                Retirement can be exciting, but the transition can also be challenging. 
                People move from a structured work routine to suddenly having a lot of free time leading
                to a loss of identity and purpose.
                
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">Why This Matters</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl mb-3">🏥</div>
                    <h4 className="font-bold  mb-2">NSLHD</h4>
                    <p>Loneliness leads to health problems and extra pressure on hospitals</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl mb-3">🏘️</div>
                    <h4 className="font-bold  mb-2">Hornsby Council</h4>
                    <p>The community is ageing and diverse, with wellbeing concerns</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl mb-3">🤝</div>
                    <h4 className="font-bold  mb-2">PHN</h4>
                    <p>Connect healthcare with the community through social prescribing</p>
                </div>
            </div>
        </div>
    
    </>

    
  )
}

export default Problem