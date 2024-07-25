import React, { useState } from "react";

import ReferralLine from "../../components/ReferralLine/ReferralLine";
import Select from "../../components/Select/Select";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Referrals.scss";
import { useReferralQuery } from "../../api/referralListApi";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Referrals = () => {
  const { data: data, isSuccess: isSuccess } = useReferralQuery();
  console.log(data);
  const [referDetails, setReferDetails] = useState([]);
  const token = localStorage.getItem("accessToken");
  const decodedData = jwtDecode(token);

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      let ref = data.map((Object) => {
        const jobOpening = Object.jobOpening;
        console.log(jobOpening);
        const position = jobOpening?.position;
        const referrer = Object.referrer;
        const referee = Object.referree;
        console.log(referrer, position, jobOpening, "hey");

        return {
          candidate_name: referee.name,
          job_position: position?.name,
          referred_by: referrer?.name,
          status: Object?.status,
          bonus:
            referrer?.email === decodedData.email
              ? Object.status
              : "Unavailable",
        };
      });

      setReferDetails(ref);
    }
  }, [data, isSuccess]);

  console.log(referDetails);

  const titles = [
    "Candidate name",
    "Job Position",
    "Referred by",
    "Status",
    "Bonus",
  ];
  const referrals = [
    {
      candidate_name: "Shanidh Khan Meppathur",
      job_position: "Software developer",
      referred_by: "Navaneeth P M",
      status: "Pending",
      bonus: "Under review",
    },
    {
      candidate_name: "Thejas sree vaishanveshwara satyasai T",
      job_position: "Software developer",
      referred_by: "Navaneeth P M",
      status: "Pending",
      bonus: "Under review",
    },
    {
      candidate_name: "Shanidh",
      job_position: "Software developer",
      referred_by: "Navaneeth P M",
      status: "Pending",
      bonus: "Under review",
    },
    {
      candidate_name: "Shanidh",
      job_position: "Software developer",
      referred_by: "Navaneeth P M",
      status: "Pending",
      bonus: "Under review",
    },
    {
      candidate_name: "Shanidh",
      job_position: "Software developer",
      referred_by: "Navaneeth P M",
      status: "Pending",
      bonus: "Under review",
    },
    {
      candidate_name: "Shanidh",
      job_position: "Software developer",
      referred_by: "Navaneeth P M",
      status: "Pending",
      bonus: "Under review",
    },
  ];
  const filterOptions = [
    { value: "email", display: "Candidate email" },
    { value: "referral_id", display: "Referral ID" },
  ];
  return (
    <>
      <section className="section-header">
        <p className="title">Referrals</p>
        <div className="header-right">
          {/* <p>Filter by</p> */}
          {/* <select name="filter">
            <option value="" selected disabled>
              Filter by
            </option>
            <option value="email">Candidate email</option>
            <option value="referral_id">Referral id</option>
          </select> */}
          <Select
            name="filter"
            placeholder="Filter by"
            options={filterOptions}
          />
          <Searchbar />
        </div>
      </section>
      <section className="referrals-section">
        <section >
          <div className="fields-header referral-line">
            {titles.map((title) => (
              <p key={title}>{title}</p>
            ))}
          </div>
        </section>
        {referDetails.map((referral) => (
          <ReferralLine key={referral.id} referral={referral} />
        ))}
      </section>
    </>
  );
};

export default Referrals;
