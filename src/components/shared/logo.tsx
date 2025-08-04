import React from 'react';

export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <g>
        <path
          d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 82C29.6 87 13 70.4 13 50S29.6 13 50 13s37 16.6 37 37-16.6 37-37 37z"
          fill="currentColor"
        />
        <path
          d="M50 22.5c-15.2 0-27.5 12.3-27.5 27.5S34.8 77.5 50 77.5s27.5-12.3 27.5-27.5h-7.5c0 11-9 20-20 20s-20-9-20-20 9-20 20-20V22.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
