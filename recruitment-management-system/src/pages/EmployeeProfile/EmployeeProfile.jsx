import ContentHeader from "../../components/Content Header/ContentHeader"
import GridRows from "../../components/GridRows/GridRows"

const EmployeeProfile = ()=>{
    const headers={
        "candidateID" : "Candidate ID",
        "candidateName" : "Candidate Name",
        "role": "Software Developer",
        "joiningDate": "Joining Date",
        "action": ""

    }

    const details = [
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
      
      

    return(
        <div className="employee-profile-container">
            <ContentHeader title="Profile"/>
            <section className="my-rewards">
                <h2 className="my-reward-heading">My Rewards</h2>
                <GridRows Headers={headers} Details={details} />
            </section>
            <section className="my-referrals">
            <h2 className="my-reward-heading">My Referrals</h2>
            <GridRows Headers={headers} Details={details} />
            </section>
        </div>
    )
}

export default EmployeeProfile;