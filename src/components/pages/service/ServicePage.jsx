import React from 'react'
import ImageTextHeader from '@/components/pages/home/ImageTextHeader';
import PageTabs from '@/components/pages/service/PageTabs';
import Image from 'next/image';



const ServicePage = () => {
    
    return (
        <div  className='w-full pb-8'>
            <div className=" pt-20">
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
                <PageTabs />
       
      
            <p className=" body-padding-y text-18 italic font-bold mb-4 text-primary text-center">
                We’ve listed our most commonly requested services, but cater to many other needs. <br />
                If you don’t find what you need please get in touch and we’d be happy to help or <br />
                refer you to someone that can
            </p>
            <button className="bg-secondary2 text-white rounded-full px-4 py-2 text-18 font-bold block mx-auto mt-4  transition duration-300 ease-in-out hover:bg-olive-500 hover:bg-opacity-80">
                Get in Touch
            </button>
        </div>
    )
}

export default ServicePage