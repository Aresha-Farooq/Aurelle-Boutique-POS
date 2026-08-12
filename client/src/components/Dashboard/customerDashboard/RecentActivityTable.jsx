
function RecentActivityTable({ activities }) {
  return (
    <div className="bg-white rounded-xl p-5 w-150">

      <h2 className="text-xl font-bold mb-5 border-b pb-4">
        Recent Activity
      </h2>

      {activities.map((activity) => (

        <div
          key={activity.id}
          className="flex items-center justify-between py-4 border-b"
        >

          <div className="flex gap-3">

            <i className={activity.icon}></i>

            <div>
              <h3>{activity.title}</h3>
              <p className="text-gray-400">
                {activity.date}
              </p>
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default RecentActivityTable;