import PaymentsLeft from '@/components/pages/membership/PaymentsLeft';
import PaymentsRight from '@/components/pages/membership/PaymentsRight';
import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
        return (
        <>
            <div className="flex">
                <PaymentsLeft />
                <PaymentsRight />
            </div>
        </>
        );
      }

export default page