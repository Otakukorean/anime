import React from 'react'
import { cn } from '@/lib/utils';

interface HeaderTilteProps {
    label : string;
    start ?: boolean
}

const HeaderTilte = ({label,start = false} : HeaderTilteProps) => {
  return (
    <div  className={`flex items-center  gap-2 ${!start && 'md:px-3 lg:px-10 mr-[10px] mt-12'}  `} >
        <div className='w-1 h-10 bg-[#bd00ff]'></div>
        <h1 className={cn( "text-2xl text-black  dark:text-white font-semibold")} >{label}</h1>
    </div>
  )
}

export default HeaderTilte