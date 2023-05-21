import React from 'react'

const Card = ({title,des}) => {
  return (
    <div className="w-full h-80 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to -[#202327] group hover:bg-gradient-to-b hover:to-[#1e2024] transition-colors duration-100 group lgl:-mb-7 ">
    <div className= "flex flex-col gap-6">
        <div className="overflow-y-hidden">
        <div ClassName ="flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 hover:text-designColor">
                {title}
            </h2>
            <p className="base">{des}</p>
        
        </div>
     
        </div>
    </div>
    </div>
  )
}

export default Card