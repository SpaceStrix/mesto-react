function PopupWithForm({ name, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          aria-label="Кнопка закрытия попапа"
          type="button"
          onClick={onClose}
        />
        <form
          className="popup__form"
          name={`popup__form-${name}`}
          noValidate=""
        >
          {children}

          <button type="submit" className="popup__btn-safe">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
