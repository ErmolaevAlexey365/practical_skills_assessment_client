/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Service from "./Service/Service";
import { managerAPI } from "../../fetchManager/fetchManager";

const Main = () => {
  let [services, setServices] = useState([]);
  useEffect( () => {
    async function fetchData() {
      let data = await managerAPI.getServices();
      setServices(data);
    }
    fetchData();
  }, []);

  return (
    <main style={{paddingTop: "3.5rem"}} role="main">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p>
            This is a template for a simple marketing or informational website. It includes a large
            callout called a jumbotron and three supporting pieces of content. Use it as a starting
            point to create something more unique.
          </p>
          <p><a className="btn btn-primary btn-lg" href="/#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {services.map((services) => {
            return <Service key={Math.random()} name={services.name} slug={services.slug} description={services.description}/>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
