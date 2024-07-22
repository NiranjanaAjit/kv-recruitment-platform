import React, { useEffect, useState } from "react";
import ContentHeader from "../../components/Content Header/ContentHeader";
import AdderInput from "../../components/AdderInput/AdderInput";
import Form from "../../components/Form/Form";

const ReferCandidate = () => {
  const skillOptions = [
    { id: 1, value: "Development", label: "Development" },
    { id: 2, value: "Design", label: "Design" },
    { id: 3, value: "Python", label: "Python" },
    { id: 4, value: "JavaScript", label: "JavaScript" },
    { id: 5, value: "Java", label: "Java" },
    { id: 6, value: "React", label: "React" },
    { id: 7, value: "Angular", label: "Angular" },
    { id: 8, value: "Vue.js", label: "Vue.js" },
    { id: 9, value: "Node.js", label: "Node.js" },
    { id: 10, value: "HTML/CSS", label: "HTML/CSS" },
    { id: 11, value: "TypeScript", label: "TypeScript" },
    { id: 12, value: "PHP", label: "PHP" },
    { id: 13, value: "Ruby on Rails", label: "Ruby on Rails" },
    { id: 14, value: "Swift", label: "Swift" },
    { id: 15, value: "Kotlin", label: "Kotlin" },
    { id: 16, value: "C++", label: "C++" },
    { id: 17, value: "C#", label: "C#" },
    { id: 18, value: "SQL", label: "SQL" },
    { id: 19, value: "MongoDB", label: "MongoDB" },
    { id: 20, value: "GraphQL", label: "GraphQL" },
    { id: 21, value: "Docker", label: "Docker" },
    { id: 22, value: "AWS", label: "AWS" },
    { id: 23, value: "Azure", label: "Azure" },
    { id: 24, value: "Google Cloud Platform", label: "Google Cloud Platform" },
    { id: 25, value: "Machine Learning", label: "Machine Learning" },
    { id: 26, value: "Data Science", label: "Data Science" },
    { id: 27, value: "Cybersecurity", label: "Cybersecurity" },
    { id: 28, value: "UX/UI Design", label: "UX/UI Design" },
    { id: 29, value: "Blockchain", label: "Blockchain" },
    { id: 30, value: "DevOps", label: "DevOps" },
  ];
  const fields = [
    {
      name: "email",
      label: "Candidate email",
      maxLength: 30,
    },
    {
      name: "name",
      label: "Full name",
      maxLength: 40,
    },
    {
      name: "experience",
      label: "Experience",
      maxLength: 40,
    },
    {
      name: "resume",
      label: "Link to candidate's resume file",
      maxLength: 60,
    },
    {
      name: "skill",
      label: "Candidate's skills",
      options: skillOptions,
      component: AdderInput,
    },
  ];

  let initialState = {};
  fields.map((field) => {
    if (!["skill"].includes(field.name)) initialState[field.name] = "";
    else initialState[field.name] = [];
  });
  const [valueState, setValueState] = useState(initialState);
  const [errState, setErrState] = useState(initialState);

  const onChange = (e, fieldName, maxLength = 20) => {
    if (["skill"].includes(fieldName)) {
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
  const handleListChange = (list, fieldName) => {
    setValueState((state) => ({ ...state, [fieldName]: list }));
  };
  return (
    <>
      <ContentHeader title="Refer a friend" />
      <Form
        fields={fields}
        values={valueState}
        errors={errState}
        onFieldChange={onChange}
        onListChange={handleListChange}
      />
    </>
  );
};

export default ReferCandidate;
