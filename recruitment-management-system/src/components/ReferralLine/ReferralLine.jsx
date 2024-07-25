import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { roleEnum } from "../../utils/role.enum";
import { useEditReferralMutation } from "../../api/referralApi";
import Select from "../Select/Select";
import { referralStatusEnum } from "../../utils/referralStatus.enum";

const ReferralLine = ({ referral, fieldCount, candidateReferral }) => {
  const role = useSelector((state) => state.auth.userRole);
  const [
    editReferral,
    { data: editReferralData = {}, isSuccess: editReferralSuccess },
  ] = useEditReferralMutation();
  const [status, setStatus] = useState(referral?.status);
  const [bonus, setBonus] = useState(referral?.bonus);
  const statusOptions = Object.values(referralStatusEnum).map((value) => ({
    value: value.toLowerCase(),
    display: value,
  }));
  console.log(statusOptions);
  const bonusOptions = [
    { value: false, display: "Bonus pending" },
    { value: true, display: "Bonus given" },
  ];
  let columns;
  let displayDetails = {
    candidate_name: referral?.candidate_name,
    job_position: referral?.job_position,
    referred_by: referral?.referred_by,
  };
  if (role === roleEnum.ADMIN) {
    columns = 5;
  } else {
    displayDetails = {
      candidate_name: referral?.candidate_name,
      job_position: referral?.job_position,
      referred_by: referral?.referred_by,
    };
    displayDetails["status"] = referral?.status;
    columns = 4;
  }
  const onStatusChange = (e) => {
    editReferral({
      id: referral?.id,
      state: e.target.value.toLowerCase(),
      bonusGiven: bonus,
    });
  };
  const onBonusChange = (e) => {
    editReferral({
      id: referral?.id,
      state: status,
      bonusGiven: e.target.value === "true" ? true : false,
    });
  };
  useEffect(() => {
    if (editReferralSuccess) {
      setBonus(editReferralData?.bonusGiven);
      setStatus(editReferralData?.status);
      console.log(editReferralData);
    }
  }, [editReferralData, editReferralSuccess]);
  return (
    <>
      <div
        className="referral-line"
        style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}
      >
        {Object.keys(displayDetails).map((key) => (
          <div key={key}>{displayDetails[key]}</div>
        ))}
        {role === roleEnum.ADMIN ? (
          <>
            <Select
              value={status}
              handleChange={onStatusChange}
              name="status"
              options={statusOptions}
              status={statusOptions}
            />
            <Select
              value={bonus}
              handleChange={onBonusChange}
              name="bonus"
              options={bonusOptions}
            />
          </>
        ) : candidateReferral ? (
          <>
            <div></div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ReferralLine;
