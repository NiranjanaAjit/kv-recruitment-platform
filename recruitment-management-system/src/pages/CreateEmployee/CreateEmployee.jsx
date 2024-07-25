import { useEffect, useState } from "react";
import ContentHeader from "../../components/Content Header/ContentHeader";
import Select from "../../components/Select/Select";
import Form from "../../components/Form/Form";
import { useGetPositionListQuery } from "../../api/positionApi";
import { usePostEmployeeListMutation } from "../../api/employeeApi";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const { data: getPositions, isSuccess: success } = useGetPositionListQuery();
  const [postEmployee] = usePostEmployeeListMutation();
  const [positionData, setPositionData] = useState([
    { value: "", display: "" },
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      setPositionData(
        getPositions.map((val) => ({
          value: val.name,
          display: val.name,
        }))
      );
    }
  }, [getPositions, success]);

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
      maxLength: 100,
    },
    {
      name: "email",
      label: "Email",
      maxLength: 100,
    },
    {
      name: "experience",
      label: "Experience",
      maxLength: 100,
    },
    {
      name: "password",
      label: "Enter a new password",
      maxLength: 100,
    },
    {
      name: "position",
      label: "Position",
      options: positionData ? positionData : positionOptions,
      className: "select-container",
      component: Select,
    },
  ];
  let initialState = {};
  fields.map((field) => {
    initialState[field.name] = "";
  });

  const [valueState, setValueState] = useState(initialState);
  const [errState, setErrState] = useState(initialState);

  const onChange = (e, fieldName, maxLength = 100) => {
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
    postEmployee(valueState);
    navigate(-1);
  };
  return (
    <>
      <ContentHeader title="Add employee" />
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

export default CreateEmployee;
