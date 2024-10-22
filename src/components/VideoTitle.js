import React from 'react'

const VideoTitle = ({title , releaseYear , type}) => {
  return (
    <div className='pt-36 px-12 font-[Poppins]'>

        <h1 className='text-6xl font-bold '>{title}</h1>
        <h2 className='text-lg font-bold'>{releaseYear}</h2>
        <h3 className='text-lg font-bold'>Type : {type}</h3>


        <div>
            <button className='bg-gray-500 text-white p-4 px-12 text-lg mr-3 bg-opacity-60 font-bold rounded-lg'>▶️ Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-lg font-bold bg-opacity-60 rounded-lg'>More Info</button>
        </div>
      
    </div>


  )
}

export default VideoTitle
