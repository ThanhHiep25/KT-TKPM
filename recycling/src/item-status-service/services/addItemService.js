import React, { useState } from "react";
import add from "../../IMG/plus.png";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AddItemService() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    std: "",
    nameSP: "",
    loaiSP: "",
    diaChi: "",
    tinhTrang: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3007/addreceiveItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Device added successfully");
        setOpen(false); // Close modal on success
      } else {
        console.error("Failed to add device");
      }
    } catch (error) {
      console.error("Error adding device:", error);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 10,
    p: 4,
  };

  return (
    <div style={{ marginTop: "20px", marginLeft: "100px" }}>
      <h1>Thêm sản phẩm tái chế :</h1>
      <img
        src={add}
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
        onClick={handleOpen}
        alt="them"
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY: "scroll",
                overflowX: "hidden",
                height: "700px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Thêm sản phẩm tái chế</h2>
              <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 500 }}>
                <div style={{ marginBottom: 20 }}>
                  <label>Nhập ID:</label>
                  <input
                    style={{
                      width: "100%",
                      height: 35,
                      borderRadius: 5,
                      padding: "0 10px",
                      marginTop: 5,
                    }}
                    type="text"
                    name="id"
                    placeholder="nhập id"
                    value={formData.id}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label>Họ Tên:</label>
                  <input
                    style={{
                      width: "100%",
                      height: 35,
                      borderRadius: 5,
                      padding: "0 10px",
                      marginTop: 5,
                    }}
                    type="text"
                    name="name"
                    placeholder="nhập tên"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label>Số điện thoại:</label>
                  <input
                    style={{
                      width: "100%",
                      height: 35,
                      borderRadius: 5,
                      padding: "0 10px",
                      marginTop: 5,
                    }}
                    type="text"
                    name="std"
                    placeholder="nhập số điện thoại"
                    value={formData.std}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label>Tên sản phẩm:</label>
                  <input
                    style={{
                      width: "100%",
                      height: 35,
                      borderRadius: 5,
                      padding: "0 10px",
                      marginTop: 5,
                    }}
                    type="text"
                    name="nameSP"
                    placeholder="nhập tên sản phẩm"
                    value={formData.nameSP}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label>Loại sản phẩm:</label>
                  <select
                    style={{
                      width: "104%",
                      height: 35,
                      borderRadius: 5,
                      padding: "0 10px",
                      marginTop: 5,
                    }}
                    name="loaiSP"
                    value={formData.loaiSP}
                    onChange={handleChange}
                  >
                    <option value="Samsung">Samsung</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Laptop Asus">Laptop Asus</option>
                    <option value="Laptop HP">Laptop HP</option>
                    <option value="Laptop Dell">Laptop Dell</option>
                    <option value="Macbook">Macbook</option>
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label>Địa chỉ:</label>
                  <input
                    style={{
                      width: "100%",
                      height: 35,
                      borderRadius: 5,
                      padding: "0 10px",
                      marginTop: 5,
                    }}
                    type="text"
                    name="diaChi"
                    placeholder="nhập địa chỉ"
                    value={formData.diaChi}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label>Ghi chú tình trạng thiết bị:</label>
                  <textarea
                    style={{
                      width: "100%",
                      height: "80px",
                      borderRadius: 5,
                      padding: "10px",
                      marginTop: 5,
                    }}
                    name="tinhTrang"
                    placeholder="Nhập ghi chú"
                    value={formData.tinhTrang}
                    onChange={handleChange}
                  />
                </div>
                <button
                  style={{
                    width: "104%",
                    height: 45,
                    fontSize: 20,
                    borderRadius: 5,
                    marginTop: 20,
                  }}
                  type="submit"
                >
                  Xác nhận
                </button>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddItemService;
