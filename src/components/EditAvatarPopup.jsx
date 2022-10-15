import PopupWithForm from "./PopupWithForm";

function EditProfileAvatar(props) {
  return (
    <PopupWithForm isOpen={props.isOpen}>
      <fieldset className="popup__input-container">
        <legend className="popup__title">Обновить аватар</legend>

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
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfileAvatar;
