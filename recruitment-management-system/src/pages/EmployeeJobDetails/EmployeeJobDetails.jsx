import "./EmployeeJobDetails.scss";
import Button from "../../components/Button/Button";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Pill from "../../components/Pill/Pill";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import FormInput from "../../components/FormInput/FormInput";
import { useParams } from "react-router-dom";

const EmployeeJobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showRef, setShowRef] = useState(false);
  const field = {
    name: "email",
    label: "email",
    type: "text",
  };

  const [valueState, setValueState] = useState({ email: "" });
  const [errState, setErrState] = useState([]);

  const onFieldChange = (e) => {
    setValueState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (id, email) => {
    console.log(email, id, "Submit Email");
    //TODO: Implement to backend
  };

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
    active: true,
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
    console.log("mogging");

    setShowRef(!showRef);
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
          <div className="heder--status">
            {jobDetail.active ? "Active" : "Inactive"}
          </div>
        </div>
        <div className="header--buttons">
          <Button
            className="refer--button"
            text="Refer a Friend"
            handleSubmit={() => onRefer()}
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
      {showRef && (
        <>
          <Modal
            onClose={() => {
              setShowRef(false);
            }}
            className={"employeeList"}
          >
            <h3>Enter Candidate's Email</h3>
            <FormInput
              key={field.name}
              type={field.type}
              label={field.label}
              name={field.name}
              value={valueState[field.name]}
              error={setErrState[field.name]}
              handleChange={(e) =>
                onFieldChange(e, field.name, field.maxLength)
              }
            />
            <div className="modal--referbuttons">
              <Button
                className="modal--referbutton"
                handleSubmit={() => {
                  onSubmit(id, valueState);
                }}
                text="Continue"
              />
              <Button
                className="modal--refercancelbutton"
                handleSubmit={() => {
                  setShowRef(false);
                }}
                text="Cancel"
              />
            </div>
          </Modal>
        </>
      )}
    </main>
  );
};

export default EmployeeJobDetails;
