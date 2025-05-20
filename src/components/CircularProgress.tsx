import React from 'react';

const CircularProgress = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  const radius = 23;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.9;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (currentStep / totalSteps) * circumference;

  return (
    <div className="relative w-15 h-15">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#D9D9D9"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#6CBB2D"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute right-[12px] top-4 flex items-center justify-center text-xs font-semibold  text-[#344350]">
        {currentStep}/{totalSteps}
      </div>
    </div>
  );
};

export default CircularProgress;
