import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-200 py-4 text-slate-800'>
        <div className='container mx-auto text-center'>
            <p className='text-sm'>MernShop &copy; {currentYear}</p>
        </div>
      
    </footer>
  )
}
