import React, { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/api";

const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) => {
  const [userName, setUserName] = useState("Name");
  const [userDescription, setUserDescription] = useState("userDescription");
  const [userAvatar, setUserAvatar] = useState("https://i.gifer.com/YFcY.gif");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialData()
      .then(([getDataCard, getDataUserInfo]) => {
        setUserName(getDataUserInfo.name);
        setUserDescription(getDataUserInfo.about);
        setUserAvatar(getDataUserInfo.avatar);

        setCards(getDataCard);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <button className="profile__avatar" onClick={onEditAvatar}>
            <img
              src={userAvatar}
              alt="avatar"
              className="profile__avatar-img"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit"
              type="button"
              aria-label="Кнопка редактирования профиля"
              onClick={onEditProfile}
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-item"
          type="button"
          aria-label="Кнопка добавление карточки"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map(card => {
          return <Card card={card} key={card._id} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
};

export default Main;
