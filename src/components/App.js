import React, { useEffect, useState } from "react";

import Header from "./Heades";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";

import api from "../utils/api";

const App = () => {
  // useState
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialData()
      .then(([getDataCard, getDataUserInfo]) => {
        setCurrentUser(getDataUserInfo);
        setCards(getDataCard);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  // =========================================
  // callback open
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleCardClick = link => {
    setSelectedCard(link);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardLike = card => {
    const isLiked = card.likes.some(
      whoLiked => whoLiked._id === currentUser._id
    );
    api.toggleLike(card._id, isLiked).then(newCard => {
      setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
    });
  };

  const handleCardDelete = card => {
    api.removeCard(card._id).then(() => {
      setCards(state => state.filter(c => c._id !== card._id));
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={"avatar"}
          title={"Обновить аватар"}
          btnText={"Сохранить"}
        >
          <label className="popup__label">
            <input
              type="url"
              name="avatar"
              id="popup__url-avatar"
              className="popup__input"
              placeholder="Укажите ссылку"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__url-avatar-error popup__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={"profile"}
          title={"Редактировать профиль"}
          btnText={"Сохранить"}
        >
          <label className="popup__label">
            <input
              type="text"
              name="name"
              id="popup__name-input"
              className="popup__input"
              placeholder="Имя"
              minLength={2}
              maxLength={40}
              required=""
            />
            <span className="popup__name-input-error popup__input-error" />
          </label>
          <label className="popup__label">
            <input
              type="text"
              name="about"
              id="popup__about-input"
              className="popup__input"
              placeholder="О себе"
              minLength={2}
              maxLength={200}
              required=""
            />
            <span className="popup__about-input-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={"element"}
          title={"Новое место"}
          btnText={"Создать"}
        >
          <label className="popup__label">
            <input
              type="text"
              name="name"
              id="popup__title-input"
              className="popup__input"
              placeholder="Название"
              minLength={2}
              maxLength={40}
              required=""
            />
            <span className="popup__title-input-error popup__input-error" />
          </label>
          <label className="popup__label">
            <input
              type="url"
              name="link"
              id="popup__url-input"
              className="popup__input"
              placeholder="Укажите ссылку"
              minLength={2}
              maxLength={200}
              required=""
            />
            <span className="popup__url-input-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm title={"Вы уверены ?"} btnText={"Да"}></PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          name={"image"}
        />
      </>
    </CurrentUserContext.Provider>
  );
};

export default App;
