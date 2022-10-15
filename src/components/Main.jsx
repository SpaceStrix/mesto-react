function Main(props) {
  console.log(props);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <button className="profile__avatar" onClick={props.onEditAvatar}>
            <img src="" alt="avatar" className="profile__avatar-img" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button
              className="profile__edit"
              type="button"
              aria-label="Кнопка редактирования профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__job"></p>
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
