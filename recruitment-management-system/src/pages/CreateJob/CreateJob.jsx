import { useState } from "react";
import ContentHeader from "../../components/Content Header/ContentHeader";
import Form from "../../components/Form/Form";

const CreateJob = () => {
  const fields = [
    {
      label: "Job Position",
      name: "position",
      type: "text",
      maxLength: 20,
    },
    {
      label: "Experience",
      name: "experience",
      type: "text",
      maxLength: 10,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      maxLength: 10,
    },
    {
      label: "No of openings",
      name: "noOfOpening",
      type: "number",
    },
    // {
    //   label: "Responsibilities",
    //   name: "responsibility",
    //   type: "date",
    // },
  ];
  const initialState = {};
  fields.map((field) => {
    initialState[field.name] = "";
  });
  const [valueState, setValueState] = useState(initialState);
  const [errState, setErrState] = useState(initialState);

  const onChange = (e, maxLength = 20) => {
    console.log(e.target.value);
    if (!["departmentId", "role", "status"].includes(e.target.name)) {
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
      <ContentHeader title="Create Job posting" />
      <Form
        fields={fields}
        onFieldChange={onChange}
        values={valueState}
        errors={errState}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateJob;
