import React, { useEffect } from "react";
import JobCard from "../../components/Job Card/JobCard";
import ContentHeader from "../../components/Content Header/ContentHeader";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import { useState } from "react";
import { useGetJobListQuery } from "../../api/jobApi";
import "./JobsList.scss";
import { useSelector } from "react-redux";
import { roleEnum } from "../../utils/role.enum";

const JobsList = ({ jobs }) => {
  const navigate = useNavigate();
  const [showRef, setShowRef] = useState(false);
  const role = useSelector((state) => state.auth.userRole);

  const field = {
    name: "email",
    label: "email",
    type: "text",
  };
  if (role !== roleEnum.ADMIN) {
    jobs = jobs.filter((job) => job?.active && job?.noOfOpening > 0);
  }
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

  const [id, setId] = useState();

  return (
    <>
      <div className="job-cards-container ">
        {jobs?.map((record) => {
          return (
            <>
              <JobCard
                key={record?.id}
                id={record?.id}
                position={record?.position}
                location={record?.location}
                created_at={record?.createdAt}
                experience={record?.experience}
                noOfOpening={record?.noOfOpening}
                active={record?.active}
                onClick={(e, id) => {
                  navigate(`/${role?.toLowerCase()}/jobDetails/${id}`);
                }}
                onRefer={(e, id) => {
                  e.stopPropagation();
                  console.log("refer button", id);
                  setShowRef(!showRef);
                  setId(id);
                }}
              />
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default JobsList;
