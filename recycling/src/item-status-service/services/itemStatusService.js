import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import add from "../../IMG/plus.png";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemStatusService() {
  const [devices, setDevices] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Lấy thông tin người dùng từ local storage
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    std: "",
    nameSP: "",
    loaiSP: "",
    diaChi: "",
    tinhTrang: "",
  });

  // Hàm sinh ID ngẫu nhiên từ 3 số trở lên
  const generateRandomId = () => {
    const min = 100;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleOpen = () => {
    setOpen(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: generateRandomId().toString(),
      name : user ? user.name : 'Guest',
    }));
  };

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
        toast.success("Thêm sản phẩm thành công");
        fetchDevices();
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

  // Load devices on initial render
  useEffect(() => {
    fetchDevices();
  }, []);

  // Fetch devices from the server
  const fetchDevices = () => {
    fetch("http://localhost:3002/receiving/data")
      .then((response) => response.json())
      .then((data) => setDevices(data))
      .catch((error) => console.error("Error fetching devices:", error));
  };

  // Handle delete button click
  const handleDelete = (_id) => {
    fetch(`http://localhost:3007/deletedItem/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update devices state after successful deletion
        setDevices(devices.filter((device) => device._id !== _id));
        console.log(data);
        console.log("Device deleted successfully");
      })
      .catch((error) => console.error("Error deleting device:", error));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Họ tên", width: 130 },
    { field: "std", headerName: "Số điện thoại", width: 130 },
    { field: "nameSP", headerName: "Tên sản phẩm", width: 130 },
    { field: "loaiSP", headerName: "Loại sản phẩm", width: 130 },
    { field: "diaChi", headerName: "Địa chỉ", width: 160 },
    { field: "tinhTrang", headerName: "Tình trạng thiết bị", width: 260 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <DeleteIcon onClick={() => handleDelete(params.row._id)} />
      ),
    },
  ];

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        marginTop: "100px",
        marginLeft: "100px",
      }}
    >
      <ToastContainer />
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
              <form
                onSubmit={handleSubmit}
                style={{ width: "100%", maxWidth: 500 }}
              >
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
                    readOnly
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
                    readOnly
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
      <h1>Bảng sản phẩm</h1>
      <DataGrid
        rows={devices}
        columns={columns}
        pageSize={5}
        checkboxSelection
        autoHeight
      />
    </div>
  );
}

export default ItemStatusService;
