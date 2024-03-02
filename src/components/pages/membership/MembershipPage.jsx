import React,{useState,useEffect} from 'react'
import ImageHeader from '@/components/ui/ImageHeader'
import MembershipService from '@/services/Membership.Service'

const MembershipPage = () => {
    const [memberships, setMemberships] = useState([]);

  const getMemberships = () => {
    console.log('getUserData running');
    MembershipService.getMemberships()
        .then((response) => {
            if (!response.data.status) {
                console.log('error');
                return;
            }
            setMemberships(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
}
  useEffect(() => {
    getMemberships();
  }, [])
  return (
    <div>MembershipPage</div>
  )
}

export default MembershipPage