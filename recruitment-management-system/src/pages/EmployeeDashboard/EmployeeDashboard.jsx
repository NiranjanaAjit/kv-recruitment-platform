import React from "react";
import JobCard from "../../components/Job Card/JobCard";
import "../EmployeeDashboard/EmployeeDashboard.scss";
import ContentHeader from "../../components/Content Header/ContentHeader";

const detailsArray = [
	{
		id: 2,
		position: "Frontend Developer",
		location: "Bangalore, India",
		created_at: "2027-06-02",
		experience: "2-3 Years",
		noOfOpening: 12,
		active: true,
	},
	{
		id: 3,
		position: "Data Scientist",
		location: "Mumbai, India",
		created_at: "2027-05-19",
		experience: "4-5 Years",
		noOfOpening: 8,
		active: true,
	},
	{
		id: 4,
		position: "Backend Developer",
		location: "Chennai, India",
		created_at: "2027-06-10",
		experience: "3-4 Years",
		noOfOpening: 15,
		active: true,
	},
	{
		id: 5,
		position: "UI/UX Designer",
		location: "Hyderabad, India",
		created_at: "2027-05-28",
		experience: "2-4 Years",
		noOfOpening: 10,
		active: true,
	},
	{
		id: 6,
		position: "Software Engineer",
		location: "Pune, India",
		created_at: "2027-06-15",
		experience: "3-5 Years",
		noOfOpening: 20,
		active: true,
	},
	{
		id: 7,
		position: "DevOps Engineer",
		location: "Delhi, India",
		created_at: "2027-06-20",
		experience: "4-6 Years",
		noOfOpening: 18,
		active: true,
	},
	{
		id: 8,
		position: "Full Stack Developer",
		location: "Ahmedabad, India",
		created_at: "2027-05-25",
		experience: "3-5 Years",
		noOfOpening: 14,
		active: false,
	},
	{
		id: 9,
		position: "Product Manager",
		location: "Gurgaon, India",
		created_at: "2027-06-05",
		experience: "5-7 Years",
		noOfOpening: 6,
		active: true,
	},
	{
		id: 10,
		position: "Quality Assurance Engineer",
		location: "Noida, India",
		created_at: "2027-05-30",
		experience: "2-4 Years",
		noOfOpening: 10,
		active: true,
	},
	{
		id: 11,
		position: "Data Engineer",
		location: "Jaipur, India",
		created_at: "2027-06-08",
		experience: "3-5 Years",
		noOfOpening: 12,
		active: false,
	},
	{
		id: 12,
		position: "System Administrator",
		location: "Kolkata, India",
		created_at: "2027-06-18",
		experience: "2-3 Years",
		noOfOpening: 9,
		active: true,
	},
	{
		id: 13,
		position: "Network Engineer",
		location: "Lucknow, India",
		created_at: "2027-06-12",
		experience: "3-4 Years",
		noOfOpening: 7,
		active: true,
	},
	{
		id: 14,
		position: "UI Developer",
		location: "Indore, India",
		created_at: "2027-06-25",
		experience: "2-3 Years",
		noOfOpening: 5,
		active: true,
	},
	{
		id: 15,
		position: "Software Tester",
		location: "Chandigarh, India",
		created_at: "2027-06-14",
		experience: "1-2 Years",
		noOfOpening: 4,
		active: false,
	},
	{
		id: 16,
		position: "Database Administrator",
		location: "Bhopal, India",
		created_at: "2027-06-22",
		experience: "3-5 Years",
		noOfOpening: 11,
		active: true,
	},
];

const EmployeeDashboard = () => {

  const filteredArray= detailsArray.filter((obj)=> obj.active===true)


	return (
    <>
      <ContentHeader title={`${filteredArray.length} Active Jobs`}/>
		<div className="employee-dashbord-container ">
			{filteredArray.map((record) => {
				return <JobCard id={record.id} position={record.position} location={record.location} created_at={record.created_at} experience={record.experience} noOfOpening={record.noOfOpening} active={record.active} />;
			})}
		</div>
    </>
	);
};

export default EmployeeDashboard;
