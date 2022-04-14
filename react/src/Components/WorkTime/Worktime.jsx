import React from "react";
import "./WorkTime.css";

const year = "лет";

const workInfo = [
  { number: 25, year: year, text: "на рынке", id: 1 },
  { number: 20, year: year, text: "добываем золото", id: 2 },
  { number: 15, year: year, text: "добываем руду", id: 3 },
  { number: 17, year: year, text: "добываем серебро", id: 4 },
];

function SectionItems({ item }) {
  return (
    <div className="section">
      <p className="section-number">{item.number}</p>
      <p className="section-year">{item.year}</p>
      <p className="section__text">{item.text}</p>
    </div>
  );
}

export const WorkTime = () => {
  return (
    <section className="work__time">
      <div className="work__time-content">
        {workInfo.map((item) => {
          return <SectionItems key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
