import React from 'react';
import moment from 'moment';
import './payment.scss';

function Payment({ image, firstName, lastName, date, amount }) {
  return (
    <div className="border m-2">
      <div className="p-2 payment-info-container">
        <div className="payment-info">
          <img src={image} alt="profile-image" className="payment-profile" />
        </div>
        <div className="payment-info payment-user-name">
          <p>{firstName}&nbsp;{lastName}</p>
        </div>
        <div className="payment-info payment-user-name">
          <p className="badge rounded-pill bg-info text-dark">{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
        <div className="payment-info payment-user-name">
          <p className="badge rounded-pill bg-success text-dark">LKR.{amount}.00</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;