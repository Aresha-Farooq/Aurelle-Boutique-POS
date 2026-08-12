import React from 'react'
import { savedMeasurements } from './MeasurementData'
import { customerProfile } from './customerInfo'
const Measurements = () => {
  return (
    <div className="mt-2">
      
       <div className="ml-6" >
            <h1 className="text-2xl font-bold">Measurements &amp; Profile</h1>
            <h1>You saved fit details and accurate info</h1>
        </div>
        <div className="mt-4 flex gap-4">
 <div className="divide-y divide-gray-200 w-160 bg-white rounded-2xl shadow-2xl py-2 px-6 ml-5">
<h2 className="text-xl font-bold my-2">Measurements</h2>
  {savedMeasurements.map((measurement) => (
    <div
      key={measurement.id}
      className="flex justify-between items-center py-4"
    >
    
      <span className="text-gray-600">{measurement.part}</span>
      <span className="font-semibold">{measurement.value}</span>
    </div>
  ))}
</div>
{/*Right Side */}
<div>
<div className="bg-white rounded-2xl p-6 shadow-md w-80">

  <h2 className="text-xl font-bold mb-6">Profile</h2>

  <div className="space-y-5">

    <div>
      <p className="text-sm text-gray-500">Full Name</p>
      <p className="font-semibold">{customerProfile.fullName}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Email</p>
      <p className="font-semibold">{customerProfile.email}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Phone</p>
      <p className="font-semibold">{customerProfile.phone}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Preferred Fit</p>
      <p className="font-semibold">{customerProfile.preferredFit}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Gender</p>
      <p className="font-semibold">{customerProfile.gender}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Address</p>
      <p className="font-semibold">{customerProfile.address}</p>
    </div>

  </div>

</div>

</div>

        </div>
      

    </div>
  )
}

export default Measurements
