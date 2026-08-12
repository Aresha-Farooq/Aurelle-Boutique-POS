import React from "react";

const OrderCard = ({
  icon,
  iconBg,
  iconColor,
  title,
  value,
  unit,
  change,
  changeColor,
  lineColor,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md duration-300 w-[240px] h-[200px] flex flex-col justify-between">

      {/* Top */}
      <div className="flex justify-between items-start">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <i className={`${icon} ${iconColor} text-2xl`}></i>
        </div>

        <div className="text-right flex-1 ml-4">
          <div className="flex items-center justify-end gap-2">
            <h3 className="font-semibold text-gray-700 whitespace-nowrap">{title}</h3>
            <i className="fa-solid fa-circle-info text-gray-400 text-sm"></i>
          </div>

          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900 whitespace-nowrap">{value}</span>
            {unit && (
              <span className="text-gray-500 ml-2 text-lg">{unit}</span>
            )}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div>

        <p className={`font-medium ${changeColor}`}>
          {change}
        </p>

        {/* Mini Graph */}
        <div className="mt-4">
          <svg
            viewBox="0 0 200 40"
            className="w-full h-10"
            fill="none"
          >
            <path
              d="M0 30
                 L20 30
                 L40 22
                 L60 28
                 L80 27
                 L100 15
                 L120 18
                 L140 8
                 L160 18
                 L180 12
                 L200 12"
              stroke={lineColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>

    </div>
  );
};

export default OrderCard;