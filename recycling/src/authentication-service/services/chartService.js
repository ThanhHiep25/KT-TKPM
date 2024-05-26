import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

const data = [
  { id: 0, value: 10, label: "SamSung" },
  { id: 1, value: 15, label: "Iphone" },
  { id: 2, value: 20, label: "Laptop Asus" },
  { id: 3, value: 40, label: "Laptop HP" },
  { id: 4, value: 20, label: "Laptop Dell" },
  { id: 5, value: 60, label: "Macbook" },
];

const Equipment = [1060000, 2000000, 4200000, 408000, 410000, 5700000];

const Soldout = [1000000, 2200000, 4600000, 230000, 400000, 6000000];

function ChartService() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        wordWrap: "inherit",
      }}
    >
      <div
        style={{
          marginLeft: "10%",
          wordWrap:"break-word"
        }}
      >
        <h3>Biểu đồ thiết bị</h3>
        <LineChart
          series={[
            {
              id: "Equipment",
              label: "Giá thu mua :",
              data: Equipment,
              stack: "total",
              area: true,
              showMark: false,
            },
            {
              id: "Soldout",
              label: "Bán ra :",
              data: Soldout,
              stack: "total",
              area: true,
              showMark: false,
            },
          ]}
          width={500}
          height={200}
          margin={{ left: 80 }}
        />
      </div>
      <div
        style={{
          marginLeft: "10%",
          wordWrap:"break-word"
        }}
      >
        <h3>Biểu đồ thiết bị</h3>
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={200}
          width={500}
        />
      </div>
    </div>
  );
}

export default ChartService;
