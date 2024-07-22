import React from "react";

import ReferralLine from "../../components/ReferralLine/ReferralLine";
import Select from "../../components/Select/Select";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Referrals.scss";

const Referrals = () => {
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
        <section>
          <div className="fields-header referral-line">
            {titles.map((title) => (
              <p key={title}>{title}</p>
            ))}
          </div>
        </section>
        {referrals.map((referral) => (
          <ReferralLine key={referral.id} referral={referral} />
        ))}
      </section>
    </>
  );
};

export default Referrals;
