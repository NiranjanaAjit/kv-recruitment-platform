import { lazy, useEffect, useState } from "react";
import ContentHeader from "../../components/Content Header/ContentHeader";
import Select from "../../components/Select/Select";
import Form from "../../components/Form/Form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditEmployeeListMutation,
  useGetEmployeeListByIdQuery,
} from "../../api/employeeApi";
import { useGetPositionListQuery } from "../../api/positionApi";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: getPositions, isSuccess: success } = useGetPositionListQuery();
  const [updateEmployee] = useEditEmployeeListMutation();
  const { data: getEmployeeById, isSuccess } = useGetEmployeeListByIdQuery({
    id,
  });
  const [data, setData] = useState({});
  const [positionData, setPositionData] = useState([
    { value: "", display: "" },
  ]);

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

  useEffect(() => {
    isSuccess ? setData(getEmployeeById) : setData({});
  }, [getEmployeeById, isSuccess]);

  useEffect(() => {
    if (data) {
      const position = data.position;
      setValueState({
        name: data.name,
        position: position?.name,
        experience: data.experience,
        email: data.email,
        password: data.password ? data.password : "",
        id: id,
      });
    }
  }, [data]);

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
      maxLength: 30,
    },
    {
      name: "position",
      label: "Position",
      placeholder: "Position",
      options: positionData ? positionData : positionOptions,
      className: "select-container",
      component: Select,
    },
    {
      name: "id",
      label: "Employee ID",
      value: id,
      disable: true,
    },
  ];
  let initialState = {};
  fields.map((field) => {
    if (field.name == "Employee ID") {
      initialState[field.name] = id;
    } else {
      initialState[field.name] = "";
    }
  });

  const [valueState, setValueState] = useState({
    name: "",
    position: "",
    experience: "",
    email: "",
    password: "",
    id: id,
  });
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
    // if (fieldName == "password") {
    //   setValueState((state) => ({
    //     ...state,
    //     [e.target.name]: e.target.value == "" ? undefined : e.target.value,
    //   }));
    // } else {
    setValueState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    updateEmployee({ id, payload: valueState });
    navigate(-1);
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
