import React from 'react'
import DentalHealthOverview from './DentalHealthOverview'
import NoNextAppointments from './NoNextAppointments'

function ActivityOverview() {
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
        <DentalHealthOverview />
        <NoNextAppointments />
    </div>
  )
}

export default ActivityOverview
