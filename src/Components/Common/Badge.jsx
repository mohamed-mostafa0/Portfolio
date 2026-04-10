import React from 'react'

export default function Badge({
    children  
}) {
  return <>
    <li className='px-3 py-[2.5px] font-semibold text-xs bg-gray-700/50 rounded-md hover:bg-gray-500/50 transition'>{children}</li>
  </>
}
