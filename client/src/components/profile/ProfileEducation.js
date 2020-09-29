import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, description },
}) => {
  return (
    <div>
      <h2 className="text-dark">{school}</h2>
      <Moment formate="MM/DD/YYYY">{from}</Moment> -{" "}
      {!to ? " Now" : <Fragment formate="MM/DD/YYYY">{to}</Fragment>}
      <p>
        <strong>Degree:</strong>
        {"  "}
        {degree}
      </p>
      <p>
        <strong>Field of Study:</strong>
        {"  "}
        {fieldofstudy}
      </p>
      <p>
        <strong>Description:</strong>
        {"  "}
        {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
