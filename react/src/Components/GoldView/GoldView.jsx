import React from "react";
import './GoldViewStyle.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export function GoldView ({priceList}) {
  if (priceList) {
    priceList = JSON.parse(priceList)
  }
    return (
      <LineChart
        className="view"
        width={700}
        height={300}
        data={priceList}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="datetime" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="open"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="close" stroke="#82ca9d" />
      </LineChart>
    );
};
