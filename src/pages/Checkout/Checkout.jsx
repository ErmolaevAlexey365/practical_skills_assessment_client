/* eslint-disable no-unused-vars */

import Cart from "../../components/Cart/Cart";
import FormCart from "../../components/Form/Form";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  let state = location.state;
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
        <p className="lead">
          Below is an example form built entirely with Bootstrap’s form controls. Each
          required form group has a validation state that can be triggered by attempting to submit the
          form without completing it.
        </p>
      </div>
      <div className="row">
        <Cart state={state} price={state.price}/>
        <FormCart _id={state._id}/>
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2017-2020 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href=".#">Privacy</a></li>
          <li className="list-inline-item"><a href=".#">Terms</a></li>
          <li className="list-inline-item"><a href=".#">Support</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Checkout;
