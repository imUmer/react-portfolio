import React from 'react'

export default function SignBadge({sign}) {
  return (
    <div className='flex justify-center items-center gap-2 my-6 backdrop-blur-sm p-1 border rounded-3xl w-fit px-3 hover:bg-slate-500/40 hover:text-green-200'>
        <p className='font-semibold'>✵</p>
        <p className='text-xl font-medium '>{sign}</p>
    </div>
  )
}
