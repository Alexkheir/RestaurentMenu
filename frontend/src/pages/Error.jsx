import React from 'react';

function ErrorPage({ error }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#29251c] to-[#2c2306]">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-yellow-500">An Error Occurred</h1>
        <p className="text-center text-yellow-500">{error?.message || 'Something went wrong!'}</p>
      </div>
    </div>
  );
}

export default ErrorPage;