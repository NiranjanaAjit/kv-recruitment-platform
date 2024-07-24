import { useGetJobListQuery } from "../../api/jobApi";
import ContentHeader from "../../components/Content Header/ContentHeader";
import JobsList from "../../components/JobsList/JobsList";

const EmployeeDashboard = () => {
  const { data = [], isSuccess } = useGetJobListQuery();

  let jobs = [];
  data?.map((job) => {
    if (job?.active && job?.noOfOpening > 0) {
      console.log("job:", job?.active, job?.noOfOpening);
      jobs.push({
        id: job?.id,
        position: job?.position?.name,
        location: job?.location?.toUpperCase(),
        experience: job?.experience,
        noOfOpening: job?.noOfOpening,
        active: job?.active,
        createdAt: new Date(job?.createdAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      });
    }
  });
  return (
    <>
      <ContentHeader title={`${jobs.length} Active Jobs`} />
      <JobsList jobs={jobs} />
    </>
  );
};

export default EmployeeDashboard;
