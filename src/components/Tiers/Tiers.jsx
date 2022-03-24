/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const Tiers = ({ _id, type, description, price }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{type}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title"><small className="text-muted">{price}$/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>
            {description}
          </li>
        </ul>
        <Link to={"/checkout"} state={{type, description, price, _id,}} className="btn btn-lg btn-block btn-outline-primary">Buy now
        </Link>
      </div>
    </div>
  );
};

export default Tiers;
