import React from 'react'

const Navbar = () => {
  return (
    <div className='main lg:flex md:flex  flex-wrap justify-between items-center px-4 bg-purple-400 py-4 shadow-lg sticky top-0'>
        <div className='left flex items-center space-x-3 justify-center '>
            <img className='w-11 shadow-lg' src="https://cdn-icons-png.flaticon.com/128/3171/3171927.png" alt="img" />
<h2 className="font-bold shadow-lg text-2xl text-white">SR-Movies</h2>

        </div>
        <div className='right'>
            <ul className='flex space-x-4 text-white justify-center'>
<a href='/Home'>Home</a>
<a href='/About'>About</a>
<a href='/Contact'>Contact</a>
<a href='/Services'>Services</a>

            </ul>

        </div>
      


    </div>
  )
}

export default Navbar
