function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector(".popup_type_avatar").classList.add("popup_opened");
  };
  const handleEditProfileClick = () => {
    document.querySelector(".popup_type_edit").classList.add("popup_opened");
  };
  const handleAddPlaceClick = () => {
    document
      .querySelector(".popup_type_new-card")
      .classList.add("popup_opened");
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <button className="profile__avatar" onClick={handleEditAvatarClick}>
            <img src="" alt="avatar" className="profile__avatar-img" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button
              className="profile__edit"
              type="button"
              aria-label="Кнопка редактирования профиля"
              onClick={handleEditProfileClick}
            ></button>
            <p className="profile__job"></p>
          </div>
        </div>
        <button
          className="profile__add-item"
          type="button"
          aria-label="Кнопка добавление карточки"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
