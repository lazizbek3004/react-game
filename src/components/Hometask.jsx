import React, { useState } from 'react';

import { FaArrowLeft, FaArrowRight, FaCheck, } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Hometask = () => {

	const [num, setNum] = useState(0)

	const next = () => {
		if(num < 4){
			setNum(n => n = n + 1)
		}
	}

	const prev = () => {
		if(num > 0){
			setNum(n => n = n - 1)
		}
	}

  return (
	<div className="w-full h-[100dvh] bg-yellow-300 flex flex-col gap-[48px] justify-center items-center">
		<div className="flex items-center">
			<div className='w-[40px] h-[40px] rounded-[50%] border-[3px] text-green-600 border-green-600 flex justify-center items-center'><FaCheck /></div>
			<div className='w-[60px] h-[3px] bg-gray-400'><div className={num >= 1 ? 'w-full h-[3px] bg-green-600' : 'w-full h-[3px] bg-gray-400'}></div></div> 
			<div className={num >= 1 ? 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-green-600 text-gray-400 text-[20px] flex justify-center items-center' : 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-gray-400 text-gray-400 text-[20px] flex justify-center items-center'}>
				{num >= 1 ? <div className='text-green-600'><FaCheck /></div> : <div className='text-gray-400 text-[22px] font-bold'><IoClose /></div>}</div>
			<div className='w-[60px] h-[3px] bg-gray-400'><div className={num >= 2 ? 'w-full h-[3px] bg-green-600' : 'w-full h-[3px] bg-gray-400'}></div></div> 
			<div className={num >= 2 ? 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-green-600 text-gray-400 text-[20px] flex justify-center items-center' : 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-gray-400 text-gray-400 text-[20px] flex justify-center items-center'}>
				{num >= 2 ? <div className='text-green-600'><FaCheck /></div> : <div className='text-gray-400 text-[22px] font-bold'><IoClose /></div>}</div>
			<div className='w-[60px] h-[3px] bg-gray-400'><div className={num >= 3 ? 'w-full h-[3px] bg-green-600' : 'w-full h-[3px] bg-gray-400'}></div></div> 
			<div className={num >= 3 ? 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-green-600 text-gray-400 text-[20px] flex justify-center items-center' : 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-gray-400 text-gray-400 text-[20px] flex justify-center items-center'}>
				{num >= 3 ? <div className='text-green-600'><FaCheck /></div> : <div className='text-gray-400 text-[22px] font-bold'><IoClose /></div>}</div>
			<div className='w-[60px] h-[3px] bg-gray-400'><div className={num >= 4 ? 'w-full h-[3px] bg-green-600' : 'w-full h-[3px] bg-gray-400'}></div></div> 
			<div className={num >= 4 ? 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-green-600 text-gray-400 text-[20px] flex justify-center items-center' : 'w-[40px] h-[40px] rounded-[50%] border-[3px] border-gray-400 text-gray-400 text-[20px] flex justify-center items-center'}>
				{num >= 4 ? <div className='text-green-600'><FaCheck /></div> : <div className='text-gray-400 text-[22px] font-bold'><IoClose /></div>}</div>
			


		</div>
		<div className="flex gap-[24px]">
			<button className={num >= 1 ? 'bg-blue-800 active:bg-blue-700 text-white w-[60px] h-[30px] flex justify-center items-center rounded-[12px]' : 'bg-white text-black w-[60px] h-[30px] flex justify-center items-center rounded-[12px]'} onClick={() => prev()}><FaArrowLeft /></button>
			<button className={num <= 3 ? 'bg-blue-800 active:bg-blue-700 text-white w-[60px] h-[30px] flex justify-center items-center rounded-[12px]' : 'bg-white text-black w-[60px] h-[30px] flex justify-center items-center rounded-[12px]'} onClick={() => next()}><FaArrowRight /></button>
		</div>

	</div>
  )
}

export default Hometask