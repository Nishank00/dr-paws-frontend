import React,{useEffect,useState} from 'react'
import ServiceItemList from './ServiceItemList'
import ClinicServiceService from "@/services/ClinicService.service";

const TabWindow = ({ title, service_id }) => {
    const [itemList, setItemList] = useState([]);

    const getServiceItems = () => {
        ClinicServiceService.getServiceItems({ service_id })
          .then((r) => {
            if (r.data.status) {
              setItemList(r.data.data);
            } else {
              alert(r.data.message);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        if (service_id) {
          getServiceItems();
        }
      }, [service_id]);
  return (
    <div className='w-full'>
        <ServiceItemList
            service_list={itemList}
            service_name={title}
          />
    </div>
  )
}

export default TabWindow