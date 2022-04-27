import React from "react";
import "./GoldViewStyle.css";
import ScrollableAnchor from "react-scrollable-anchor";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, ResponsiveContainer,
} from "recharts";

const GOLD_VIEW_TITLE = (<h2 className="gold__view-h2">График стоимости золота</h2>)

export function GoldView({ priceList }) {
  if (priceList) {
    priceList = JSON.parse(priceList);
  }
  return (
    <ScrollableAnchor id={"goldView"}>
      <section className={'gold__view'}>
        <div className={'container'}>
          {GOLD_VIEW_TITLE}
          <ResponsiveContainer width={"100%"} height={300}>
            <LineChart
              className="view"
              data={priceList}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
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
          </ResponsiveContainer>
        </div>
      </section>
    </ScrollableAnchor>
  )
}
