import React, { useState } from "react";
import "../Css/home.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import ChartService from "../services/chartService";
import FrameHome from "./frameHome";
import ItemStatusModel from "../../item-status-service/models/itemStatusModel";
import AccountingModel from "../../accounting-service/models/accountingModel";

function HomeModel() {
  const [color, setColor] = useState(0);
  const [current, setCurrent] = useState(null);
  const handleClickSetColor = (index) => {
    setColor(index);
    setCurrent(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          borderRight: "2px solid #BED7DC",
          height: "100vh",
          maxHeight: "100%",
          width: "300px",
          backgroundColor: "",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            src="https://cdn.glitch.global/69143e54-6fbc-477e-a834-78df48c40871/H%C3%ACnh-n%E1%BB%81n-hoa-h%C6%B0%C6%A1ng-d%C6%B0%C6%A1ng-c%E1%BB%B1c-%C4%91%E1%BA%B9p.jpg"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              margin: "10px",
              border: "2px solid black",
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.5)",
            }}
            alt="img-user"
          />

          <p
            style={{
              marginLeft: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "Gray",
            }}
          >
            Name
          </p>
        </div>

        <div>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li
              className={`li-home ${color === 1 ? "selected" : ""}`}
              onClick={() => {
                handleClickSetColor(1);
              }}
            >
              <div className="menu-item">
                <HomeOutlinedIcon fontSize="large" />
                <p className="p-home">Trang chủ</p>
              </div>
            </li>
            <li
              className={`li-home ${color === 2 ? "selected" : ""}`}
              onClick={() => {
                handleClickSetColor(2);
              }}
            >
              <div className="menu-item">
                <AutoGraphOutlinedIcon fontSize="large" />
                <p className="p-home">Thống kê</p>
              </div>
            </li>
            <li
              className={`li-home ${color === 3 ? "selected" : ""}`}
              onClick={() => {
                handleClickSetColor(3);
              }}
            >
              <div className="menu-item">
                <RecyclingOutlinedIcon fontSize="large" />
                <p className="p-home">Thiết bị tái chế</p>
              </div>
            </li>
            <li
              className={`li-home ${color === 4 ? "selected" : ""}`}
              onClick={() => {
                handleClickSetColor(4);
              }}
            >
              <div className="menu-item">
                <GradingOutlinedIcon fontSize="large" />
                <p className="p-home">Phản hổi đánh giá</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {current === 1 && (
          <div style={{
            width: "130vh",
            maxWidth: "100%",
          }}>
            <FrameHome/>
          </div>
          
        )}
        {current === 2 && (
           <div style={{
            width: "130vh",
            maxWidth: "100%",
          }}>
            <AccountingModel/>
          </div>
        )}
        {current === 3 && (
            <div style={{
              width: "130vh",
              maxWidth: "100%",

            }}>
              <ItemStatusModel/>
            </div>
        )}
        {current === 4 && (
          <div className="content">
            <h2>Phản hổi đánh giá</h2>
            <p>Nội dung của Phản hổi đánh giá</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeModel;
