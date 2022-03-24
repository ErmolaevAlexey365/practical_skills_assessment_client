/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Tiers from "../../components/Tiers/Tiers";
import Footer from "../../components/FooterPricing/Footer";
import { useParams } from "react-router-dom";
import { managerAPI } from "../../fetchManager/fetchManager";

const Pricing = () => {
  let params = useParams();
  let [pricing, setPricing] = useState({});
  let [prices, setPrices] = useState([]);
  useEffect( () => {
    async function fetchData() {
      let data = await managerAPI.getPricing(params.service);
      await setPricing(data);
      await setPrices(data.pricing);
    }
    fetchData();
  }, [params.service]);

  return (
    <div>
      <div
        className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="/#">Features</a>
          <a className="p-2 text-dark" href="/#">Enterprise</a>
          <a className="p-2 text-dark" href="/#">Support</a>
          <a className="p-2 text-dark" href="/#">Pricing</a>
        </nav>
        <a className="btn btn-outline-primary" href={"/#"}>Sign up</a>
      </div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">{pricing.name}</h1>
        <p className="lead">{pricing.description}</p>
      </div>
      <div className="container">
        <div className="card-deck mb-3 text-center">
          {prices.map((price) => {
            return <Tiers key={Math.random()} _id={price._id} type={price.type} description={price.description} price={price.price}/>;
          })}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Pricing;
