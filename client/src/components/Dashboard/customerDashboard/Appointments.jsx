import React from 'react'
import { appoint } from './AppData'
import AppointmentCard from './appointmentCards'
import { useState } from 'react'
const Appointments = () => {
    const [showModal,setShowModal]=useState(false);
  return (
    <div>
<div className="flex justify-between my-4 mx-2">
 <div>
            <h1 className="text-2xl font-bold">Appointments</h1>
            <h1>Book,edit or cancel fittings and consultations</h1>
        </div>
        <div>
 <button
            onClick={() => setShowModal(true)}
            className="flex items-center p-4 gap-2 bg-green hover:bg-dark-green text-white rounded-xl duration-300 hover:cursor-pointer"
          >
            <i className="fa-solid fa-calendar-plus"></i>
            <span>Book Appointment</span>
          </button>

          {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

    <div className="bg-white w-[700px] rounded-2xl shadow-2xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-calendar-plus text-2xl text-green"></i>

          <div>
            <h1 className="text-xl font-bold">Book Appointment</h1>
            <p className="text-sm text-gray-500">
              Schedule a fitting or consultation
            </p>
          </div>
        </div>

        <button onClick={() => setShowModal(false)}>
          <i className="fa-regular fa-circle-xmark text-2xl"></i>
        </button>

      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        {/* Left Side */}
        <div className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-green">
              Appointment Type
            </label>

            <select className="border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-green">
              <option>Initial Consultation</option>
              <option>Measurements</option>
              <option>Final Fitting</option>
              <option>Alteration</option>
              <option>Delivery</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-green">
              Preferred Date
            </label>

            <input
              type="date"
              className="border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-green"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-green">
              Preferred Time
            </label>

            <input
              type="time"
              className="border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-green"
            />
          </div>
<div className="flex flex-col gap-1">
  <label className="font-semibold text-green">
    Preferred Contact Method
  </label>

  <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
    <option>Email</option>
    <option>Phone Call</option>
    <option>WhatsApp</option>
  </select>
</div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-green">
              Select Tailor
            </label>

            <select className="border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-green">
              <option>Marguerite</option>
              <option>Emily</option>
              <option>Desmond</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-green">
              Appointment Mode
            </label>

            <select className="border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-green">
              <option>In Boutique</option>
              <option>Home Visit</option>
              <option>Virtual Consultation</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-green">
              Notes
            </label>

            <textarea
              rows="5"
              placeholder="Any special instructions..."
              className="border rounded-lg p-3 bg-gray-50 resize-none focus:ring-2 focus:ring-green"
            ></textarea>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-end gap-4 mt-6 pt-4 border-t">

        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 rounded-lg border-2 border-green text-green hover:bg-green hover:text-white duration-300"
        >
          Cancel
        </button>

        <button
          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green text-white hover:bg-dark-green duration-300"
        >
          <i className="fa-solid fa-calendar-check"></i>
          Book Appointment
        </button>

      </div>

    </div>

  </div>
)}
        </div>
        
</div>
       

       <div className="space-y-5">

      {appoint.map((appointment) => (

        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
        />

      ))}

    </div>
    </div>
  )
}

export default Appointments
