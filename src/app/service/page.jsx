import ImageTextHeader from '@/components/pages/home/ImageTextHeader';
import PageTabs from '@/components/pages/service/PageTabs';
import React from 'react';
import Image from 'next/image';
import ServicePage from '@/components/pages/service/ServicePage';

const Page = () => {
  return (
    <div className='body-padding-x'>
    <ServicePage/>
    </div>
  );
};

export default Page;
