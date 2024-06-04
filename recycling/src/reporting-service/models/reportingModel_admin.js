import React, { useState } from "react";
import "../Css/report.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";

function ReportingModelAdmin() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [std, setStd] = useState("");
  const [nameSP, setNameSP] = useState("");
  const [loaiSP, setLoaiSP] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [dateG, setDateG] = useState("");
  const [tinhTrang, setTinhTrang] = useState("");
  const [gia, setGia] = useState("");

  const handlerSub = () => {
    try {
      fetch("http://localhost:3007/addreporting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: name,
          email: email,
          std: std,
          nameSP: nameSP,
          loaiSP: loaiSP,
          address: address,
          date: date,
          dateG: dateG,
          tinhTrang: tinhTrang,
          gia: gia,
        }),
      });
      toast.success("Thành công");
    } catch (error) {
      toast.error("Không thể thực hiện");
    }
  };

  return (
    <div
      style={{
        marginLeft: "100px",
      }}
    >
      <ToastContainer />
      <h1>Thông tin phản hồi :</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "350px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-basic"
            label="ID thiết bị "
            variant="standard"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <TextField
          id="standard-basic"
          label="Tên người dùng "
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Số điện thoại "
          variant="standard"
          value={std}
          onChange={(e) => setStd(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Tên thiết bị "
          variant="standard"
          value={nameSP}
          onChange={(e) => setNameSP(e.target.value)}
        />
        <div style={{ marginBottom: 20 }}>
          <label>Loại thiết bị:</label>
          <select
            style={{
              width: "100%",
              height: 35,
              borderRadius: 5,
              padding: "0 10px",
              marginTop: 5,
              fontSize: 16,
            }}
            name="loaiSP"
            onChange={(e) => setLoaiSP(e.target.value)}
          >
            <option value="Samsung">Android</option>
            <option value="Iphone">IOS</option>
            <option value="Laptop Asus">Laptop Gaming</option>
            <option value="Laptop HP">Laptop</option>
            <option value="Laptop HP">Macbook</option>
          </select>
        </div>
        <TextField
          id="standard-basic"
          label="Địa chỉ khách hàng "
          variant="standard"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Tình trạng thiết bị"
          variant="standard"
          value={tinhTrang}
          onChange={(e) => setTinhTrang(e.target.value)}
        />
        <div style={{ marginBottom: 20 }}>
          <label>Ngày nhận yêu cầu:</label>
          <input
            type="date"
            style={{
              width: "100%",
              height: 35,
              borderRadius: 5,
              padding: "0 10px",
              marginTop: 5,
              fontSize: 18,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label>Ngày lập phản hồi:</label>
          <input
            type="date"
            style={{
              width: "100%",
              height: 35,
              borderRadius: 5,
              padding: "0 10px",
              marginTop: 5,
              fontSize: 18,
            }}
            onChange={(e) => setDateG(e.target.value)}
          />
        </div>
        <TextField
          id="standard-basic"
          label="Giá "
          variant="standard"
          value={gia}
          onChange={(e) => setGia(e.target.value)}
        />
        <div>
          <Button
            variant="contained"
            onClick={() => {
              handlerSub();
              setAddress();
              setDate();
              setDateG();
              setGia();
              setName();
              setStd();
              setLoaiSP();
              setNameSP();
              setTinhTrang();
              setID();
            }}
          >
            Hoàn tất phản hồi
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default ReportingModelAdmin;
