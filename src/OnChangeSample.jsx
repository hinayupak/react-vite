import React, { useState } from "react";

function OnChangeSample() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };
  const handleShippingChange = (e) => {
    console.log(e.target.value);
    setShipping(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} type="text" />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Drop a comment"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <div className="input-radio-container">
        <label>
          <input
            name="shipping"
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>
        <br />
        <label>
          <input
            name="shipping"
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
}

export default OnChangeSample;
