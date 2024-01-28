import React from 'react'
import VisitCard from './VisitCard';

const AllVisit = () => {
    const gridData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='w-full flex justify-between items-center'>
            {/* visit grid box */}
            <div className='grid grid-cols-3 gap-5'>
                {
                    gridData.map((ele, index) =>( 
                        <VisitCard />
                    ))
                }
            </div>
        </div>
    )
}

export default AllVisit