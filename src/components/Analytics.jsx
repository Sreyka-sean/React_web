import React from 'react'
import Laptop from '../assets/Funny_Dog_S.jpg'

const Analytics = () => { 
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Laptop} alt="Funny Dog" className="w-full max-w-[500px] mx-auto my-4" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className='text-sm sm:text-base'>
                        Your normal content goes here.
                    </p>
                    <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3" >Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
