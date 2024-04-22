import React from 'react'
import UserTable from './UserTable'


const UsersPage = async() => {

  return (
    <div>
        {new Date().toLocaleTimeString()}
       <UserTable />
    </div>
  )
}

export default UsersPage