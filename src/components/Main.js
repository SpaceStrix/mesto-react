import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) => {
  const userContex = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllCard()
      .then(dataCard => {
        setCards(dataCard);
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
              src={userContex.avatar}
              alt="avatar"
              className="profile__avatar-img"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userContex.name}</h1>
            <button
              className="profile__edit"
              type="button"
              aria-label="Кнопка редактирования профиля"
              onClick={onEditProfile}
            ></button>
            <p className="profile__job">{userContex.about}</p>
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
