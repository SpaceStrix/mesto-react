import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <fieldset className="popup__input-container">
        <legend className="popup__title">name</legend>
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
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
