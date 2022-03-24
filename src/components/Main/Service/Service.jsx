/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const Service = ({ name, description, slug }) => {
  return (
    <div className="col-md-4">
      <h2>{name}</h2>
      <p>{description}</p>
      <p><Link to={"/service/" + slug} className="btn btn-secondary" href="#" role="button">View details &raquo;</Link></p>
    </div>
  );
};

export default Service;
