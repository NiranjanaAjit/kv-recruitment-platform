import { useOutlet, useOutletContext, useParams } from "react-router-dom";
import TextField from "../../components/TextField/TextField";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GridRows from "../../components/GridRows/GridRows";

const EmployeeList = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [empId, setEmpId] = useState(0);
  const dispatch = useDispatch();
  const [empDetails, setEmpDetails] = useState([
    {
      name: "Harry",
      id: 1,
      empJD: "12.02.24",
      role: "Full Stack",
      Status: "Probation",
      empExp: 5,
      address: "Location 1",
      email: "harry@example.com",
    },
    {
      name: "Susan Kurian",
      id: 2,
      empJD: "12.02.24",
      role: "UI Engineer",
      Status: "Probation",
      empExp: 5,
      address: "Location 1",
      email: "susan.kurian@example.com",
    },
    {
      name: "Susan Kurian",
      id: 3,
      empJD: "12.02.24",
      role: "UI Engineer",
      Status: "Active",
      empExp: 5,
      address: "Location 1",
      email: "susan.kurian@example.com",
    },
    {
      name: "Susan Kurian",
      id: 4,
      empJD: "12.02.24",
      role: "UI Engineer",
      Status: "Inactive",
      empExp: 5,
      address: "Location 1",
      email: "susan.kurian@example.com",
    },
  ]);

  // let status = useSelector((state) => {
  //   return state.employee.status;
  // });

  // const { data, isSuccess } = useGetEmployeeListQuery();
  // useEffect(() => {
  //   if (isSuccess) {
  //     const employees = data.map((emp) => ({
  //       ...emp,
  //       joiningDate: new Date(emp.createdAt).toLocaleDateString("en-GB", {
  //         day: "numeric",
  //         month: "short",
  //         year: "numeric",
  //       }),
  //     }));
  //     setEmpDetails(
  //       status === "All"
  //         ? employees
  //         : employees.filter((employee) => employee.status === status)
  //     );
  //   }
  // }, [data, isSuccess, status]);

  // const empHeaders = EmpDetails.headers;

  const empHeaders = {
    name: "Employee Name",
    id: "Employee ID",
    empJD: "Joining Date",
    role: "Role",
    status: "Status",
    empAct: "Action",
  };

  const onClick = (id) => {
    navigate(`edit/${id}`);
  };

  const onCreate = (id) => {
    navigate("create");
  };

  const onSelect = (e, id) => {
    e.stopPropagation();
    navigate(`details/${id}`);
  };

  const onDelete = (id) => {
    // const action = {
    //   type: actionTypes.DELETE_EMPLOYEES,
    //   payload: id,
    // };
    setShowDelete(false);
    deleteEmp({ id: id });
  };

  const onFilter = (e, action) => {
    // dispatch({
    //   type: actionTypes.FILTER_EMPLOYEES,
    //   payload: action,
    // });
    dispatch(filterEmployee(action));
  };

  const color = {
    Active: "Active",
    Probation: "Probation",
    Inactive: "Inactive",
  };

  const actions = () => {
    return (
      <>
        <span className="header-options">
          <div className="action-images">
            <img
              alt="Delete Logo"
              onClick={(e) => {
                e.stopPropagation();
                setShowDelete(!showDelete);
                setEmpId(value.id);
              }}
            />
          </div>
          <div
            className="action-images"
            onClick={(e) => {
              e.stopPropagation();
              onClick(value.id);
            }}
          >
            <img alt="KeyValue Systems logo" />
          </div>
        </span>
      </>
    );
  };

  return (
    <>
      <main>
        <div className="content">
          <div className="jobdetail--header">
            <div className="header--title">
              <h1>Employee List</h1>
            </div>
          </div>
          <GridRows
            Headers={empHeaders}
            Details={empDetails}
            color={color}
            actions={actions}
          ></GridRows>
          {showDelete && (
            <>
              <Modal
                buttonStyle={"white"}
                onClose={() => {
                  setShowDelete(false);
                }}
                onSubmit={() => {
                  onDelete(empId);
                }}
                value={{ Del: "Delete", Cancel: "Cancel" }}
                style={{
                  display: "flex",
                  position: "absolute",
                  zIndex: "1000",

                  width: "50%",
                  height: "50%",
                  backgroundColor: "rgba(255, 255, 255)",
                  color: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "40px",
                  textAlign: "center",
                  opacity: "1",
                  border: "1px black solid",
                  boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.5)", // Example box shadow
                }}
              ></Modal>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default EmployeeList;
