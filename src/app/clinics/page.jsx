import ImageTextHeader from '@/components/pages/home/ImageTextHeader'
import ClinicCard from '@/components/pages/clinic/ClinicCard'
import ClinicService from '@/services/Clinic.service'
import ClinicPage from '@/components/pages/clinic/ClincPage'


const Clinics = () => {
    const gridData = [0, 1, 2, 3, 4, 5, 7, 8]




    return (
        <div className='body-padding-x'>
            <ClinicPage />
        </div>
    )
}

export default Clinics