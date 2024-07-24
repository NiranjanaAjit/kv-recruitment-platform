import { lazy, useEffect, useState } from "react";
import ContentHeader from "../../components/Content Header/ContentHeader";
import Select from "../../components/Select/Select";
import Form from "../../components/Form/Form";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  console.log(id);
  const positionOptions = [
    {
      value: "Associate software engineer",
      display: "Associate software engineer",
    },
    {
      value: "Software Engineer",
      display: "Software Engineer",
    },
    {
      value: "Sr. Software Engineer",
      display: "Sr. Software Engineer",
    },
    {
      value: "Associate Technical Lead",
      display: "Associate Technical Lead",
    },
    {
      value: "HR manager",
      display: "HR manager",
    },
    {
      value: "Product manager",
      display: "Product manager",
    },
  ];
  const fields = [
    {
      name: "name",
      label: "Employee Name",
      maxLength: 30,
    },
    {
      name: "email",
      label: "Email",
      maxLength: 30,
    },
    {
      name: "experience",
      label: "Experience",
      maxLength: 15,
    },
    {
      name: "password",
      label: "Enter a new password",
      maxLength: 30,
    },
    {
      name: "position",
      label: "Position",
      placeholder: "Position",
      options: positionOptions,
      className: "select-container",
      component: Select,
    },
    {
      name: "Employee ID",
      label: "Employee ID",
      value: id,
      disable: true,
    },
  ];
  let initialState = {};
  fields.map((field) => {
    if (field.name == "Employee ID") {
      initialState[field.name] = id;
      console.log(initialState[field.name]);
    } else {
      initialState[field.name] = "";
    }
  });

  const [valueState, setValueState] = useState(initialState);
  const [errState, setErrState] = useState(initialState);

  const onChange = (e, fieldName, maxLength = 20) => {
    if (["position"].includes(fieldName)) {
    } else {
      if (e.target.value.length > maxLength) {
        setErrState((state) => ({
          ...state,
          [e.target.name]: `Maximum length ${maxLength} characters`,
        }));
        return;
      }
      if (
        valueState[e.target.name].length == maxLength &&
        e.target.value.length <= maxLength
      ) {
        setErrState((state) => ({
          ...state,
          [e.target.name]: "",
        }));
      }
    }
    setValueState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    console.log(valueState);
  };
  return (
    <>
      <div className="editemployee">
        <ContentHeader title="Edit Employee" />
        <Form
          fields={fields}
          onFieldChange={onChange}
          values={valueState}
          errors={errState}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default EditEmployee;
