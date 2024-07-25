import React, { useState } from "react";

import ReferralLine from "../../components/ReferralLine/ReferralLine";
import Select from "../../components/Select/Select";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Referrals.scss";
import { useReferralQuery } from "../../api/referralApi";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import ContentHeader from "../../components/Content Header/ContentHeader";

const Referrals = () => {
  const { data: data, isSuccess: isSuccess } = useReferralQuery();
  console.log(data);
  // const [searchOptions, setSearchOptions] = useState({
  //   option: "",
  //   value: "",
  // });
  const [filterBy, setFilterBy] = useState("");
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

        return {
          candidate_name: referee.name,
          job_position: position?.name,
          referred_by: referrer?.name,
          status: Object?.status,
        };
      });

      setReferDetails(ref);
    }
  }, [data, isSuccess]);

  const titles = ["Candidate name", "Job Position", "Referred by", "Status"];

  const filterOptions = [
    { value: "email", display: "Candidate email" },
    { value: "referral_id", display: "Referral ID" },
  ];

  const search = (e) => {
    const text = e.target.value;
    console.log(text);
  };

  const onFilterChange = (e) => {
    console.log("Monkey");
    console.log(e);
    const text = e.target.value;

    console.log(text, "hey");
    // setSearchOptions((searchOptions) => ({
    //   ...searchOptions,
    //   option: e.target.value,
    // }));
    setFilterBy(text);
  };

  const valueChange = (e) => {
    console.log(e.taget.value);
  };
  return (
    <>
      <section className="section-header">
        <ContentHeader title={"Referrals"}/>
        <p className="title"></p>
        <div className="header-right">
          <Select
            name="filter"
            placeholder="Filter by"
            options={filterOptions}
            handleChange={onFilterChange}
          />
          <Searchbar onSubmit={search} onChange={valueChange} />
        </div>
      </section>
      <section className="referrals-section">
        <section>
          <div
            className="fields-header referral-line"
            style={{ gridTemplateColumns: `repeat(${titles?.length},1fr)` }}
          >
            {titles.map((title) => (
              <p key={title}>{title}</p>
            ))}
          </div>
        </section>
        {referDetails.map((referral) => (
          <ReferralLine fieldCount={4} key={referral.id} referral={referral} />
        ))}
      </section>
    </>
  );
};

export default Referrals;
