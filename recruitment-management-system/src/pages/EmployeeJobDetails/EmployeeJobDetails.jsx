import "./EmployeeJobDetails.scss";
import Button from "../../components/Button/Button";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Pill from "../../components/Pill/Pill";

const EmployeeJobDetails = () => {
  const jobDetail = {
    title: "Software Engineer",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquidistinctio earum rem id totam quibusdam alias quos excepturi odionostrum aut, hic cum neque aliquam architecto consequuntur. Ipsam, laborum!",
    location: "New York, NY",
    experience: "3-5 years",
    createdAt: "2024-07-20",
    noOfOpenings: 2,
    descrip: {
      responsibility: [
        {
          point:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquidistinctio earum rem id totam quibusdam alias quos excepturi odionostrum aut, hic cum neque aliquam architecto consequuntur. Ipsam, laborum!",
        },
        { point: "Example responsibility 2" },
      ],
      qualification: [
        { point: "Example qualification 1" },
        { point: "Example qualification 2" },
      ],
    },
    skills: { name: ["python", "java", "django", "numpy"] },
  };

  // const jobTileDetail = jobDetail.filter(
  //   (value) =>
  //     value !== "title" && value !== "detail" && value !== "skills"
  // );

  const skills = jobDetail.skills;
  const detail = jobDetail.descrip;

  console.log(detail);
  const descriptionMapper = {
    responsibility: "Responsibility",
    qualification: "Qualifications",
  };

  const onRefer = () => {
    // TODO: EMAIL MODAL
  };

  return (
    <main className="employee--jobdetail">
      <div className="jobdetail--header">
        <div className="header--title">
          <h1>{jobDetail.title}</h1>
          <div className="header--location">
            {<MdLocationOn size={20} />}
            {jobDetail.location}
          </div>
          <div className="heder--status">Active</div>
        </div>
        <div className="header--buttons">
          <Button
            className="refer--button"
            text="Refer a Friend"
            onClick={onRefer}
          ></Button>
        </div>
      </div>
      <div className="jobdetail--details">
        <div className="jobdetail--details--main">
          <div className="jobdetail--description">
            <h2>Job description</h2>
            {jobDetail.detail}
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="skill--list">
              {skills.name.map((value) => {
                return <Pill value={value} key={value}></Pill>;
              })}
            </div>
          </div>
          <div className="jobdetail--requirements">
            {Object.keys(descriptionMapper).map((options) => {
              {
                console.log(descriptionMapper[options]);
                console.log(options);
              }
              return (
                <>
                  {console.log(detail[options])}
                  <h2>{descriptionMapper[options]}</h2>
                  <div className="requirement--points">
                    {detail[options].map((value) => {
                      console.log(value);
                      return (
                        <li className="jobdetail--points">{value.point}</li>
                      );
                    })}
                  </div>
                </>
              );
            })}
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

export default EmployeeJobDetails;
