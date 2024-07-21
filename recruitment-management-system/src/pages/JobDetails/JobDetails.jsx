import "./JobDetails.scss";
import Button from "../../components/Button/Button";

const JobDetails = () => {
  const jobDetail = {
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquidistinctio earum rem id totam quibusdam alias quos excepturi odionostrum aut, hic cum neque aliquam architecto consequuntur. Ipsam, laborum!",
    location: "New York, NY",
    experience: "3-5 years",
    createdAt: "2024-07-20",
    updatedAt: null,
    deletedAt: null,
    noOfOpenings: 2,
  };

  return (
    <main className="jobdetail">
      <div className="jobdetail--header">
        <div className="header--title">
          <h1>{jobDetail.title}</h1>
          <div className="status">Active</div>
        </div>
        <div className="header--buttons">
          <Button text="Refer a Friend"></Button>
          <Button text="Edit"></Button>
          <Button text="Delete"></Button>
        </div>
      </div>
      <div className="jobdetail--details">
        <div className="jobdetail--details--description">
          <h3>Job Description</h3>
          {jobDetail.description}
        </div>
        <div className="jobdetail--details--detail--tile">
          <h3>Job Details</h3>
          <div className="jobdetail--details--detail--tile--createdAt ">
            <h4>Created at </h4>
            {jobDetail.createdAt}
          </div>
          <div className="jobdetail--details--detail--tile--experience">
            <h4>Experience </h4>
            {jobDetail.experience}
          </div>

          <br />
        </div>
      </div>
    </main>
  );
};

export default JobDetails;
