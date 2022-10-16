import React, { useState, useEffect } from "react";
import avatar from "../images/avatar.jpg";
import api from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = useState("Name");
  const [userDescription, setUserDescription] = useState("userDescription");
  const [userAvatar, setUserAvatar] = useState("https://i.gifer.com/YFcY.gif");

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <button className="profile__avatar" onClick={props.onEditAvatar}>
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
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-item"
          type="button"
          aria-label="Кнопка добавление карточки"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
