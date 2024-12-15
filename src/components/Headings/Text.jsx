import React from "react";

export default function Text({ text, size, color, crange}) {
    
  return (
    <h1
      className={`text-6xl flex-wrap font-semibold text-gray-600  mt-4 mb-4`}
    >
      {text}
    </h1>
  );
}
