function UpcomingAppointment({ appointment }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-98">

      <h2 className="text-xl font-bold mb-4">
        Upcoming Appointment
      </h2>

      <div className="bg-lightSkin rounded-xl p-4">

        <p className="text-gray-500">
          {appointment.type}
        </p>

        <h1 className="text-3xl font-bold mt-2">
          {appointment.date}
        </h1>

        <h2 className="text-xl font-semibold">
          {appointment.time}
        </h2>

        <p className="text-gray-500 mt-2">
          with {appointment.tailor} ({appointment.tailorRole})
        </p>

      </div>

    </div>
  );
}

export default UpcomingAppointment;