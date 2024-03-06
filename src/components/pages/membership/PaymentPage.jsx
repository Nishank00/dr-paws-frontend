import React from 'react'
import PaymentsLeft from './PaymentsLeft'
import PaymentsRight from './PaymentsRight'
const PaymentPage = () => {
    return (
        <div className='w-full flex flex-col md:flex-row'>
            <div className=' w-full md:w-[60%]'>
                <PaymentsLeft />
            </div>
            <div className='w-full md:w-[40%]'>
                <PaymentsRight /></div>
            {/* <PaymentsLeft/>
 <PaymentsRight/> */}
        </div>
    )
}

export default PaymentPage