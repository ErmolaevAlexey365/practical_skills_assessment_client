const Cart = ({ state }) => {
  return (
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{state.type}</h6>
            <small className="text-muted">{state.description}</small>
          </div>
          <span className="text-muted">${state.price}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${state.price}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
