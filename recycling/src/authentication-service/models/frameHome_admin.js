import React from "react";
import ChartService from "../services/chartService";
import apple from "../../IMG/apple-logo.png";
import laptop from "../../IMG/laptop.png";
import android from "../../IMG/technology.png";
import "../Css/fram.css";

function FrameHomeAdmin() {
  return (
    <div>
      <h1 style={{ marginLeft: "100px" }}>Sản phẩm</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: "40vh",
          maxHeight: "100%",
        }}
      >
        <div className="setlogo android" title="Số lượng sản phẩm android">
          <img
            src={android}
            style={{
              height: "80px",
              width: "80px",
            }}
            alt="android"
          />
          <p className="psoLieu">325</p>
          <p className="psoLieu">Android</p>
        </div>
        <div className="setlogo laptop" title="Số lượng sản phẩm laptop">
          <img
            src={laptop}
            style={{
              height: "80px",
              width: "80px",
            }}
            alt="Laptops"
          />
          <p className="psoLieu">25</p>
          <p className="psoLieu">Laptop</p>
        </div>

        <div className="setlogo apple" title="Số lượng sản phẩm apple">
          <img
            src={apple}
            style={{
              height: "80px",
              width: "80px",
            }}
            alt="Apples"
          />
          <p className="psoLieu">50</p>
          <p className="psoLieu">Apple</p>
        </div>
      </div>

      <ChartService />
    </div>
  );
}

export default FrameHomeAdmin;
