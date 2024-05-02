import React from 'react';
import Image from 'next/image';

const CheckUp = () => {
    return (
      <>      <p className="body-padding-x body-padding-y text-18 italic font-bold mb-4 text-primary text-center">
      Regular check-ups and preventative measures are essential to keep your pet in <br/> 
      the best health. Take care of any vaccinations, get any help you need, or simply <br/>
      visit us to ensure your pet is doing just fine!
      </p>
      <div className="body-padding-x grid grid-cols-4 gap-20 mx-auto px-20 py-20">
        {[...Array(8)].map((_, index) => (
          <div key={index} className='text-center'>
            <Image
              src="/petting-dog.png"
              width={100}
              height={100}
              alt={`Profile Image ${index + 1}`}
              className='rounded-full mx-auto'
            />
            <p className="text-primary text-center">Lethargy</p>
          </div>
        ))}
      </div>
      </>
      );
};

export default CheckUp;
