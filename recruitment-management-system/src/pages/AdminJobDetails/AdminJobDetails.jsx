import "./AdminJobDetails.scss";
import Button from "../../components/Button/Button";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Pill from "../../components/Pill/Pill";
import { useNavigate } from "react-router-dom";

const AdminJobDetails = () => {
  const navigate = useNavigate();

  const jobDetail = {
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquidistinctio earum rem id totam quibusdam alias quos excepturi odionostrum aut, hic cum neque aliquam architecto consequuntur. Ipsam, laborum!",
    location: "New York, NY",
    experience: "3-5 years",
    createdAt: "2024-07-20",
    noOfOpenings: 2,
    skills: { name: ["python", "java", "django", "numpy"] },
    active: true,
  };

  // const jobTileDetail = jobDetail.filter(
  //   (value) =>
  //     value !== "title" && value !== "description" && value !== "skills"
  // );

  const skills = jobDetail.skills;

  const onEdit = (id) => {
    console.log("here");
    navigate(`edit/${id}`);
  };

  const onDelete = () => {
    // TODO: ARE YOU SURE MODAL
  };

  const onRefer = () => {
    // TODO: EMAIL MODAL
  };

  return (
    <main className="jobdetail">
      <div className="jobdetail--header">
        <div className="header--title">
          <h1>{jobDetail.title}</h1>
          <div className="header--location">
            {<MdLocationOn size={20} />}
            {jobDetail.location}
          </div>
          <div className="heder--status">
            {jobDetail.active ? "Active" : "Inactive"}
          </div>
        </div>
        <div className="header--buttons">
          <Button
            className="refer--button"
            text="Refer a Friend"
            handleSubmit={onRefer}
          ></Button>
          <Button
            className="edit--button"
            text={
              <>
                <MdEditSquare size={20} />
                Edit
              </>
            }
            handleSubmit={() => onEdit(1)}
          ></Button>
          <Button
            className="delete--button"
            text={
              <>
                <MdDelete size={20} />
                Close
              </>
            }
            handleSubmit={onDelete}
          ></Button>
        </div>
      </div>
      <div className="jobdetail--details">
        <div className="jobdetail--details--main">
          <div className="description">
            <h3>Job Description</h3>
            {jobDetail.description}
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill--list">
              {skills.name.map((value) => {
                return <Pill value={value} key={value}></Pill>;
              })}
            </div>
          </div>
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

export default AdminJobDetails;
