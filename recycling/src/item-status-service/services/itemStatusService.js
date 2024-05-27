import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function ItemStatusService({onDeviceAdded}) {
  const [devices, setDevices] = useState([]);


  useEffect(() => {
    fetchDevices();
  }, []); // Load devices on initial render

  const fetchDevices = () => {
    fetch("http://localhost:3007/receiveItem")
      .then((response) => response.json())
      .then((data) => setDevices(data))
      .catch((error) => console.error("Error fetching devices:", error));
  };

   // Call the callback function when a new device is added
   useEffect(() => {
    if (typeof onDeviceAdded === "function") {
      onDeviceAdded(fetchDevices);
    }
  }, [onDeviceAdded]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Họ tên", width: 130 },
    { field: "std", headerName: "Số điện thoại", width: 130 },
    {
      field: "nameSP",
      headerName: "Tên sản phẩm",
      type: "",
      width: 130,
    },
    {
      field: "loaiSP",
      headerName: "Loại sản phẩm",
      type: "",
      width: 130,
    },
    {
      field: "diaChi",
      headerName: "Địa chỉ",
      type: "",
      width: 160,
    },
    {
      field: "tinhTrang",
      headerName: "Tình trạng thiết bị",
      type: "",
      width: 260,
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
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default ItemStatusService;
