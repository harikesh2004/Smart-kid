import React from 'react'
import DashbordHeader from './_components/DashbordHeader'
import UserStory from './_components/UserStory'

const Dashboard = () => {
  return (
    <div className='p-10 md:px-20 lg:px-40 min-h-screen'>
      <DashbordHeader/>
      <UserStory/>
    </div>
  )
}

export default Dashboard