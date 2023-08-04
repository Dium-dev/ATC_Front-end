import React from 'react';

const ProfileButton = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        <div className="relative ml-3">
          <div>
            <button
              type="button"
              className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <img
                className="h-8 w-8 rounded-full"
                src=""
                alt="Image login user"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
