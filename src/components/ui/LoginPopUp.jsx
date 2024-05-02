import React from 'react';

const LoginPopUp = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
      <div className="bg-white p-8 rounded-md max-w-md w-200">
        <div className='self-stretch flex w-full flex-col mt-9 items-center space-y-4'>
          <h2 className='text-primary text-center text-2xl leading-6'>
            Log in to book a visit
          </h2>
          <div className='text-primary text-center'>
            {"Add your phone number. We'll send you a verification code."}
          </div>
          <input
            type='text'
            placeholder='Mobile Number'
            className='rounded box-border-primary p-2'
          />
        </div>
        {/* <button onClick={onClose} className="text-white bg-gray-700 px-4 py-2 rounded-md">Close</button> */}
      </div>
    </div>
  );
};

export default LoginPopUp;
