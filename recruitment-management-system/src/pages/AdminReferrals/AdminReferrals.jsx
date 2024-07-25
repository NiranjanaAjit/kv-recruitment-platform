import React, { useState } from "react";
import ReferralLine from "../../components/ReferralLine/ReferralLine";
import Select from "../../components/Select/Select";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useReferralQuery } from "../../api/referralApi";
import { useEffect } from "react";

const AdminReferrals = () => {
  const { data, isSuccess } = useReferralQuery();
  const [referDetails, setReferDetails] = useState([]);
  const token = localStorage.getItem("accessToken");
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decodedData = JSON.parse(window.atob(base64));

  useEffect(() => {
    if (isSuccess) {
      let ref = data.map((Object) => {
        const jobOpening = Object?.jobOpening;
        // console.log(jobOpening);
        const referralId = Object?.id;
        const position = jobOpening?.position;
        const referrer = Object.referrer;
        const referee = Object.referree;
        const status = Object?.status;
        const bonusGiven = Object?.false;

        return {
          id: Object?.id,
          candidate_name: referee?.name,
          job_position: position?.name,
          referred_by: referrer?.name,
          status,
          bonusGiven,
        };
      });

      setReferDetails(ref);
    }
  }, [data, isSuccess]);

  //   console.log(referDetails);

  const titles = [
    "Candidate name",
    "Job Position",
    "Referred by",
    "Status",
    "Bonus",
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
          <Select
            name="filter"
            placeholder="Search by  "
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
        {referDetails.map((referral) => (
          <ReferralLine key={referral.id} referral={referral} />
        ))}
      </section>
    </>
  );
};

export default AdminReferrals;
