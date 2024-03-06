import React from 'react';

const PaymentsRight = () => {
  return (
    <div className="flex justify-start">
      <div className="flex-1">
        <div className="body-padding-x items-stretch bg-white flex max-w-[480px] w-full flex-col text-slate-700 px-6 py-6 sm:px-12 sm:py-12">
          <div className="items-stretch bg-white flex max-w-[480px] w-full flex-col text-slate-700 mx-auto">
            <header className="text-3xl font-custom-roca mt-6 sm:mt-14">Summary</header>
            <div className="justify-between items-stretch flex w-full gap-2 sm:gap-5 mt-4 sm:mt-6 mb-6">
              <div className="justify-end items-stretch flex flex-col">
                <div className="text-xs text-primary font-custom-open-sans">Membership</div>
                <div className="text-base text-primary font-custom-open-sans font-semibold leading-6 tracking-wide mt-1">For 2 years</div>
              </div>
              <div className="justify-end items-stretch flex gap-0 mt-2 sm:mt-3.5 self-start">
                <div className="text-3xl font-custom-open-sans font-semibold leading-7 tracking-tight grow">₹6,999</div>
                <div className="text-base leading-6 tracking-wide">/yr</div>
              </div>
            </div>
            <hr className="border-t-2 border-primary3 w-full my-2" />
            <div className="items-stretch flex justify-between gap-2 sm:gap-5 text-sm text-slate-700 whitespace-nowrap mt-4 sm:mt-6">
              <div className="leading-[160%] text-base font-custom-open-sans text-primary grow">Subtotal</div>
              <div className="text-right text-base font-custom-open-sans text-primary leading-[160%] grow">₹6,999</div>
            </div>
            <div className="items-stretch flex justify-between gap-2 sm:gap-5 text-sm text-slate-700 font-bold whitespace-nowrap mt-4 sm:mt-6">
              <div className="text-primary font-custom-open-sans text-sm leading-[160%] grow">TOTAL</div>
              <div className="text-right leading-[160%] grow">₹6,999</div>
              
            </div>
            <div className="text-base leading-6 mt-6 sm:mt-80">Renewal Terms</div>
            <ul className='list-disc  text-xs pl-2 sm:pl-5 mt-2 sm:mt-4'>
              <li>Billing will be automatically renewed every month.</li>
              <li>You can cancel renewal anytime.</li>
              <li>Cancel before Feb 09 to avoid getting billed for the next month.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsRight;
