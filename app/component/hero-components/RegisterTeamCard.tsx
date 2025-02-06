import React from "react";

const RegisterTeamCard = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-3 rounded-3xl  shadow-lg hover:shadow-xl transition-shadow">
      <div className="absolute left-0 right-0 -top-3">
        <svg viewBox="0 0 400 24" className="w-full">
          <path
            d="M0,24 C100,0 200,24 300,0 C400,24 500,0 600,24"
            fill="white"
          />
        </svg>
      </div>
      <h3 className="text-lg mb-3 text-text-secondary">
        Register Team Interest
      </h3>
      {/* <p className="text-gray-600 text-base mb-6">
        Are you a team looking to showcase your skills and find exciting
        projects? Register your interest now!
      </p> */}
      <button
        className="w-full py-2.5 bg-primary gap-x-3 hover:bg-[#e69a00] text-black rounded-xl flex items-center justify-center  transition-colors font-medium"
        onClick={onOpen}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" />
          <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" />
        </svg>
        <span>Register</span>
      </button>
    </div>
  );
};

export default RegisterTeamCard;
