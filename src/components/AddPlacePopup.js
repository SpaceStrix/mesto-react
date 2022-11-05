import React, { useRef } from "react";

import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const cardTitleRef = useRef();
  const cardUrlRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    onAddPlace({
      link: cardUrlRef.current.value,
      name: cardTitleRef.current.value,
    });

    e.target.reset();
    onClose();
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={"element"}
      title={"Новое место"}
      btnText={"Создать"}
      onSubmit={handleSubmit}
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
          ref={cardTitleRef}
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
          ref={cardUrlRef}
        />
        <span className="popup__url-input-error popup__input-error" />
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
