import React from "react";

const TailorOrderCard = ({
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
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md duration-300 w-[300px] h-[210px] flex flex-col justify-between">

      {/* Top */}
      <div className="flex gap-4">

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
        >
          <i className={`${icon} ${iconColor} text-2xl`}></i>
        </div>

        {/* Title + Value */}
        <div className="flex-1">

          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-700 text-lg whitespace-nowrap">
              {title}
            </h3>

            <i className="fa-solid fa-circle-info text-gray-400"></i>
          </div>

          <div className="mt-3">
            <span className="text-5xl font-bold text-gray-900">
              {value}
            </span>

            {unit && (
              <span className="ml-2 text-gray-500 text-lg">
                {unit}
              </span>
            )}
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div>

        <p className={`font-medium text-lg ${changeColor}`}>
          {change}
        </p>

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

export default TailorOrderCard;
