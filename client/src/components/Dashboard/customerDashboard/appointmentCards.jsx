const AppointmentCard = ({ appointment }) => {

    return (

        <div className="bg-white rounded-2xl p-6 flex justify-between items-center shadow">

            {/* Left Side */}

            <div className="flex gap-6 items-center">

                {/* Date */}

                <div className="bg-gray-100 rounded-xl w-16 h-16 flex flex-col justify-center items-center">

                    <span className="text-xs font-semibold">
                        {appointment.month}
                    </span>

                    <span className="text-2xl font-bold">
                        {appointment.day}
                    </span>

                </div>

                {/* Appointment Info */}

                <div>

                    <h2 className="font-bold text-xl">
                        {appointment.title}
                    </h2>

                    <p className="text-gray-500">

                        {appointment.time}

                        <span className="mx-3">
                            • with
                        </span>

                        {appointment.tailor}

                    </p>

                </div>

            </div>

            {/* Right Side */}

            <div className="flex gap-3">

                <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold
                    ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                    {appointment.status}
                </span>

                <button className="bg-gray-100 px-4 py-2 rounded-lg">
                    Edit
                </button>

                <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg">
                    Cancel
                </button>

            </div>

        </div>

    );

};

export default AppointmentCard;