
import React from 'react'
import ImageTextHeader from '@/components/pages/home/ImageTextHeader'
import ClinicCard from '@/components/pages/clinic/ClinicCard'
import ClinicService from '@/services/Clinic.service'
import ClinicPage from '@/components/pages/clinic/ClincPage'


const Clinics = () =>
{
    const imageurl = "https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&"
    const gridData = [ 0, 1, 2, 3, 4, 5, 7, 8 ]


    const getData = () =>
    {
        ClinicService.getData().then( ( r ) =>
        {
            if ( r.data.status )
            {

            }
        } )
    }
    useEffect( () =>
    {

    }, [] )

    return (
        <div className='body-padding-x'>
            <ClinicPage />
        </div>
    )
}

export default Clinics