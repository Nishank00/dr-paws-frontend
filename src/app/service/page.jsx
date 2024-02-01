import ImageTextHeader from '@/components/pages/home/ImageTextHeader';
import PageTabs from '@/components/pages/service/PageTabs';
import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className="body-padding-x pt-20">
        <ImageTextHeader
          imageUrl={"/image139.png"}
          buttonText={"Book a Visit"}
          header={"We're here, whatever your friend needs"}
          text={
            "Our modern friendly clinics offer all the services you’ll need to keep your animal happy and healthy."
          }
          imagePosition={"left"}
        />
      </div>
      <div className="body-padding-x pt-20">
      <PageTabs />
      </div>
      <p className="body-padding-x body-padding-y text-18 italic font-bold mb-4 text-primary text-center">
        Regular check-ups and preventative measures are essential to keep your pet in <br />
        the best health. Take care of any vaccinations, get any help you need, or simply <br />
        visit us to ensure your pet is doing just fine!
      </p>
      <div className="body-padding-x grid grid-cols-4 gap-8 mx-auto px-20 py-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="text-center">
            <Image
              src="/petting-dog.png"
              width={600} // Adjusted width
              height={600} // Adjusted height
              alt={`Profile Image ${index + 1}`}
              className="rounded-full mx-auto w-auto h-100%"
            />
            <p className="text-primary text-center">Lethargy</p>
          </div>
        ))}
      </div>
      <p className="body-padding-x body-padding-y text-18 italic font-bold mb-4 text-primary text-center">
        We’ve listed our most commonly requested services, but cater to many other needs. <br />
        If you don’t find what you need please get in touch and we’d be happy to help or <br />
        refer you to someone that can
      </p>
      <button className="bg-secondary2 text-white rounded-full px-4 py-2 text-18 font-bold block mx-auto mt-4 mb-8 transition duration-300 ease-in-out hover:bg-olive-500 hover:bg-opacity-80">
        Get in Touch
      </button>
    </>
  );
};

export default Page;
