import ContentHeader from "../../components/Content Header/ContentHeader";
import JobsList from "../../components/JobsList/JobsList";
import { useGetJobListQuery } from "../../api/jobApi";

const AdminDashboard = () => {
  const { data = [], isSuccess } = useGetJobListQuery();

  const jobs = data?.map((job) => ({
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
  }));
  return (
    <>
      <ContentHeader title={`${jobs?.length} Active Jobs`} />
      <JobsList jobs={jobs} />
    </>
  );
};

export default AdminDashboard;
