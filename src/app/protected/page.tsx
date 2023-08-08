'use client'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

const Protected = () => {
  const { user, logout } = useAuth();
  user? console.log("USER    :", user) : console.log("Not logged in")
  const handleLogout =  (e: any) => {
  // e.preventDefault();
  try {
     logout()
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>

      {user ? (
        <div>
          <h1>PROTEGIDO // {user.email}</h1> 
          <button onClick={handleLogout} className='bg-secondary-dm text-text-dm w-2/12 px-4 py-3 hover:bg-green-800 transition-all duration-500 my-8 ease-in-out rounded font-semibold w-fit'>LOGOUT</button>
        </div>
      ) : (<h1>NOT LOGGED IN</h1>)}

     

    </div>
  )
}

export default Protected

