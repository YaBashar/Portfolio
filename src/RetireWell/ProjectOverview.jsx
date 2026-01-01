import React from 'react'

const ProjectOverview = () => {
  return (
    <div className="p-4 my-5 bg-white rounded-xl shadow-lg">
  
        <div className="flex justify-between items-start flex-wrap gap-4">
           
            <div>
                <p className="font-semibold text-purple-600 uppercase">Timeline</p>
                <p className="text-gray-800">12 weeks</p>
            </div>
            
            <div>
                <p className="font-semibold text-purple-600 uppercase">My Role</p>
                <p className="text-gray-800">Lead UX/UI Designer</p>
            </div>
            
            <div>
                <p className="font-semibold text-purple-600 uppercase">Team</p>
                <p className="text-gray-800">5 Consultants</p>
            </div>

            <div>
                <p className="font-semibold text-purple-600 uppercase">Partners</p>
                <p className="text-gray-800">Northern Sydney Local Health District (NSLHD), <br></br> Primary Health Network (PHN), <br></br> Hornsby Council</p>
            </div>
        </div>

        

    </div>
  )
}

export default ProjectOverview