import React from 'react';
import Input from '@/components/ui/Input';

const SuggestionForm = () => {
  return (
    <div className=" p-4 md:p-8">
      <form className="items-center bg-primary3 flex flex-col justify-center rounded-md max-md:px-5 p-6">
        <header className='text-center mb-4' style={{ width: '100%', color: '#33495F', fontSize: '1.5rem', fontFamily: 'Roca', fontWeight: '400', wordWrap: 'break-word' }}>
          Tell us where you’d like a new clinic so we know where to prioritize
        </header>
        <div className="form-group mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input type="text" id="first-name" placeholder="First name" label="First Name" />
          <Input type="text" id="last-name" placeholder="Last name" label="Last Name" />
        </div>
        <div className="form-group mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input type="tel" id="contact-number" placeholder="Contact Number" label="Contact Number" />
          <Input type="text" id="pincode" placeholder="Pincode" label="Pincode" />
        </div>
        {/* <div className="form-group mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="first-name"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="First name"
              aria-label="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="last-name"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="Last name"
              aria-label="Last Name"
            />
          </div>
          <div>
            <input
              type="tel"
              id="contact-number"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="Contact Number"
              aria-label="Contact Number"
            />
          </div>
          <div> */}
            {/* <input
              type="text"
              id="pincode"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="Pincode"
              aria-label="Pincode"
            />
          </div>
        </div> */}
        <div className="flex items-center mb-4">
          <div className="checkbox" aria-role="checkbox" aria-label="Whatsapp Consent Checkbox">
            <input type="checkbox" id="whatsapp-consent" />
          </div>
          <label htmlFor="whatsapp-consent" className="checkbox-label ml-2 text-primary">
            Ticking this box means we have your consent to chat on Whatsapp
          </label>
        </div>
        <button className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-secondary2 grow px-8 md:px-14 py-3.5 md:py-4 rounded-[86px] max-md:px-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuggestionForm;
