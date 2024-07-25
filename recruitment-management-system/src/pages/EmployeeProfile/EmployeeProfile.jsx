import { useEffect, useState } from "react"
import { useGetReferralByEmployeeQuery } from "../../api/referralApi"
import ContentHeader from "../../components/Content Header/ContentHeader"
import GridRows from "../../components/GridRows/GridRows"
import { jwtDecode } from "jwt-decode"
import "../EmployeeProfile/EmployeeProfile.scss"

const EmployeeProfile = ()=>{
    const rewardsHeaders={
        "id" : "Candidate ID",
        "name" : "Candidate Name",
        "positionName": "Position",
        "status": "Status",
        "action": "Action"

    }
    const headers={
      "id" : "Candidate ID",
      "name" : "Candidate Name",
      "positionName": "Position",
      "status": "Status"
  }

    const detailss = [
        {
          "candidateID": "1",
          "candidateName": "John Doe",
          "role": "Software Developer",
          "joiningDate": "2024-07-15"
        },
        {
          "candidateID": "2",
          "candidateName": "Jane Smith",
          "role": "Software Developer",
          "joiningDate": "2024-08-01"
        },
        {
          "candidateID": "3",
          "candidateName": "Michael Johnson",
          "role": "Software Developer",
          "joiningDate": "2024-07-22"
        }
      ]
      const userData = localStorage.getItem("accessToken");
	const decode = jwtDecode(userData);
      const {data, isSuccess} = useGetReferralByEmployeeQuery(decode.userId);
      const [details, setDetails] = useState([])
      useEffect(()=>{

        if (isSuccess){
          setDetails(data)
          console.log(details)
        }
      },[isSuccess])

      const rewardsDetails = details.filter((obj)=>obj.status=="accepted")

    return(
        <div className="employee-profile-container">
            <ContentHeader title="Profile"/>
            <section className="my-rewards">
                <h2 className="my-reward-heading">My Rewards</h2>
                <GridRows Headers={rewardsHeaders} Details={rewardsDetails} />
            </section>
            <section className="my-referrals">
            <h2 className="my-reward-heading">My Referrals</h2>
            <GridRows Headers={headers} Details={details} />
            </section>
        </div>
    )
}

export default EmployeeProfile;