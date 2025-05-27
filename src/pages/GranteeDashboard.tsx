import React from 'react'
import DashboardHeader from '@/components/GranteeDashboard/DashboardHeader'
import MainDash from '@/components/GranteeDashboard/MainDash'
import ApplicationProgressTable from '@/components/GranteeDashboard/ApplicationProgressTable'
import NotificationList from '@/components/GranteeDashboard/Notification'
import NotificationPreferences from '@/components/GranteeDashboard/NotificationPreference'
import ProfileSettings from '@/components/GranteeDashboard/ProfileSettings'

function GranteeDashboard() {
  return (
    <>
    <DashboardHeader />
    <div className='px-5 sm:px-10 md:px-24 mt-10 space-y-10'>
    <MainDash />
    <ApplicationProgressTable />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <NotificationList />
          {/* Placeholder for possible "Bank details" or other panels, feel free to request! */}
        </div>
        {/* Row 2: Profile Settings + Notification Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileSettings />
          <NotificationPreferences />
        </div>
      </div>
    </>
  )
}

export default GranteeDashboard