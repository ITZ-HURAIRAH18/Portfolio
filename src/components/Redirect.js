import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Redirect = () => {
    return (
        <div>
            <Navbar color="bg-gray-900" />
           <div className='flex flex-col space-y-3 justify-center items-center py-40 bg-white dark:bg-gray-800'>
            <CheckCircle className="h-12 w-12 text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Message has successfully sent</h2>
            <p className="max-w-sm text-center text-gray-600 dark:text-gray-400">
                Thanks for the trust you have in me, I will respond to this email soon!
            </p>
        </div>
            <Footer />
        </div>
    
  )
}

export default Redirect;
