import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

function ItemStatusService() {
  const [devices, setDevices] = useState([]);

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
  // Handle delete button click
  const handleDelete = (id) => {
    fetch(`http://localhost:3002/receiving/delete/:${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update devices state after successful deletion
        setDevices(devices.filter((device) => device.id !== id));
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
        <DeleteIcon onClick={() => handleDelete(params.row.id)} />
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
      <h1>Bảng sản phẩm</h1>
      <DataGrid
        rows={devices}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default ItemStatusService;
