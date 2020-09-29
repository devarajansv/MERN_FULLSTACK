import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, current, from, to, description },
}) => {
  return (
    <div>
      <h2 className="text-dark">{company}</h2>
      <Moment formate="MM/DD/YYYY">{from}</Moment> -{" "}
      {!to ? " Now" : <Moment formate="MM/DD/YYYY">{to}</Moment>}
      <p>
        <strong>Position:</strong>
        {"  "} {title}
      </p>
      <p>
        <strong>Description:</strong>
        {"  "} {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
