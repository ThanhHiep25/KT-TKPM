import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

function AccountingService() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from server
    fetch("http://localhost:3007/accounting")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nameUser", headerName: "Tên người giao dịch", width: 230 },
    { field: "nameSP", headerName: "Sản phẩm", width: 230 },
    { field: "loaiSP", headerName: "Loại sản phẩm", width: 230 },
    { field: "amount", headerName: "Giá ", width: 230 },
  ];

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        marginTop: "20px",
        marginLeft: "100px",
      }}
    >
      <h1>Lịch sử giao dịch</h1>
      <DataGrid
        rows={transactions}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <h3>Total Amount : </h3>
        <p style={{
          marginLeft:"10px",
          fontSize: "18px",
        }}>
          {transactions.reduce(
            (total, transaction) => total + transaction.amount,
            0
          )} VND
        </p>
      </div>
    </div>
  );
}

export default AccountingService;
