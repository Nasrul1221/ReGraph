import React from 'react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <p>Please wait a minute...</p>
      <div className="border-[4px] border-l-transparent rounded-full w-[36px] h-[36px] animate-rotate"></div>
    </div>
  );
}
