import React, { useEffect, useState } from "react";

import Header from "./Heades";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

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

  const handleUpdateUser = newData => {
    api.setNewUserInfo(newData).then(data => {
      setCurrentUser(data);
    });
  };

  const handleUpdateAvatar = newUrl => {
    api.setNewAvatar(newUrl).then(data => {
      setCurrentUser(data);
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

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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
