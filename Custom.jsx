import React from 'react';

const Custom = () => {
  return (
    <div className="container">
      <div className="revenue">
        <b>Revenue</b>
        <div className="icon"><i>i</i></div>
        <div className="val">
          <p><span className="currency">$</span>435,756</p>
          <div className="sub_val">
            <div>&#8599;</div>
            <div>16%</div>
          </div>
        </div>
      </div>
      <div className="users">
        <b>Total Users</b>
        <div className="icon"><i>i</i></div>
        <div className="val">
          <p>93656</p>
          <div className="sub_val">
            <div>&#8600;</div>
            <div>167</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
