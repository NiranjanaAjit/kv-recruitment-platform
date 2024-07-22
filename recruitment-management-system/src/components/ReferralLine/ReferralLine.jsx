import React from "react";

const ReferralLine = ({ referral }) => {
  return (
    <div className="referral-line">
      {Object.keys(referral).map((key) => (
        <p key={key}>{referral[key]}</p>
      ))}
    </div>
  );
};

export default ReferralLine;
