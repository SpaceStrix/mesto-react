function PopupWithForm(props) {
  // только текст заголовка
  // идентификатор формы (в виде строк)

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          aria-label="Кнопка закрытия попапа"
          type="button"
        />
        <form
          className="popup__form"
          name={`popup__form-${props.name}`}
          noValidate=""
        >
          {props.children}

          <button type="submit" className="popup__btn-safe">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
