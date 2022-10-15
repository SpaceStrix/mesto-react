import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(props) {
  return (
    <PopupWithForm isOpen={props.isOpen}>
      <fieldset className="popup__input-container">
        <legend className="popup__title">{props.title}</legend>
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
      </fieldset>
    </PopupWithForm>
  );
}

export default PopupEditProfile;
