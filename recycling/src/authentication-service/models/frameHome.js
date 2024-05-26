import React from "react";
import ChartService from "../services/chartService";
import apple from "../../IMG/apple-logo.png";
import laptop from "../../IMG/laptop.png";
import android from "../../IMG/technology.png";
import "../Css/fram.css"

function FrameHome() {
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
          maxWidth: "100%",
        }}
      >
        <div>
          <img
            src={android}
            style={{
              height: "80px",
              width: "80px",
            }}
            alt="android"
          />
          <p>325</p>
          <p>Androids</p>
        </div>
        <div>
          <img
            src={laptop}
            style={{
              height: "80px",
              width: "80px",
            }}
            alt="Laptops"
          />
           <p>325</p>
          <p>Androids</p>
        </div>

        <div>
          <img
            src={apple}
            style={{
              height: "80px",
              width: "80px",
            }}
            alt="Apples"
          />
           <p>325</p>
          <p>Androids</p>
        </div>
      </div>

      <ChartService />
    </div>
  );
}

export default FrameHome;
