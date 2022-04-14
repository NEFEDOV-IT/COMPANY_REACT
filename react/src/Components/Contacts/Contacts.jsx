import ScrollableAnchor from "react-scrollable-anchor";
import React from "react";
import { YandexMaps } from "./YandexMaps";
import "./Contacts.css";

const contactsH2 = (
  <div className="contacts__h2">
    <h2>КОНТАКТЫ</h2>
  </div>
);

const contacts = [
  {
    id: 1,
    img: "/src/img/svg/mesto.svg",
    name: "АДРЕС:",
    text: "ЛИГОВСКИЙ ПРОСПЕКТ 266В, ОФИС 152",
  },
  {
    id: 2,
    img: "/src/img/svg/telefon.svg",
    name: "ТЕЛЕФОН:",
    tel: "8 (812) 111-22-33",
    telNumber: "tel:88121112233",
    tel2: "8 (812) 999-88-77",
    telNumber2: "tel:88129998877",
  },
  {
    id: 3,
    img: "/src/img/svg/vremya.svg",
    name: "ВРЕМЯ РАБОТЫ:",
    text: "ПН-СБ",
    textDown: "10:00 - 20:00",
  },
  {
    id: 4,
    img: "/src/img/svg/pismo.svg",
    name: "E-MAIL:",
    mail: "MAIL@MAIL.RU",
  },
];

function ContactsItems({ item }) {
  return (
    <div className="contacts__content">
      <img src={item.img} alt={item.name} />
      <h3 className="contacts__info">{item.name}</h3>
      {item.text && <p className="contacts__content-text">{item.text}</p>}
      {item.textDown && (
        <p className="contacts__content-text">{item.textDown}</p>
      )}
      {item.tel && (
        <>
          <a href={item.telNumber} className="contacts__content-text">
            {item.tel}
          </a>
          <a href={item.telNumber2} className="contacts__content-text">
            {item.tel2}
          </a>
        </>
      )}
      {item.mail && (
        <a href="mailto:mail@mail.ru" className="contacts__content-text">
          <span className="span-mail">{item.mail}</span>
        </a>
      )}
    </div>
  );
}

export const Contacts = () => {
  return (
    <ScrollableAnchor id={"contacts"}>
      <section className="contacts">
        <div className="container">
          {contactsH2}
          <div className="contacts__body">
            {contacts.map((item) => {
              return <ContactsItems key={item.id} item={item} />;
            })}
          </div>
        </div>
        <YandexMaps />
      </section>
    </ScrollableAnchor>
  );
};
