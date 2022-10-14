import Header from "./Heades";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Кнопка закрытия попапа"
            type="button"
          ></button>
          <form className="popup__form" name="popup__form-profile" noValidate>
            <fieldset className="popup__input-container">
              <legend className="popup__title">Редактировать профиль</legend>

              <label className="popup__label">
                <input
                  type="text"
                  name="name"
                  id="popup__name-input"
                  className="popup__input"
                  placeholder="Имя"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="popup__name-input-error popup__input-error"></span>
              </label>

              <label className="popup__label">
                <input
                  type="text"
                  name="about"
                  id="popup__about-input"
                  className="popup__input"
                  placeholder="О себе"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span className="popup__about-input-error popup__input-error"></span>
              </label>
            </fieldset>
            <button type="submit" className="popup__btn-safe">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_new-card">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Кнопка закрытия попапа"
            type="button"
          ></button>

          <form className="popup__form" name="popup__form-element" noValidate>
            <fieldset className="popup__input-container">
              <legend className="popup__title">Новое место</legend>

              <label className="popup__label">
                <input
                  type="text"
                  name="name"
                  id="popup__title-input"
                  className="popup__input"
                  placeholder="Название"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="popup__title-input-error popup__input-error"></span>
              </label>

              <label className="popup__label">
                <input
                  type="url"
                  name="link"
                  id="popup__url-input"
                  className="popup__input"
                  placeholder="Укажите ссылку"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span className="popup__url-input-error popup__input-error"></span>
              </label>
            </fieldset>
            <button type="submit" className="popup__btn-safe">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Кнопка закрытия попапа"
            type="button"
          ></button>

          <form className="popup__form" name="popup__form-avatar" noValidate>
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
            <button type="submit" className="popup__btn-safe">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="img-container">
          <figure className="img-container__block">
            <img src="./" alt="" className="img-container__img" />
            <figcaption className="img-container__title">
              Новое место
            </figcaption>
          </figure>
          <button
            className="popup__close"
            aria-label="Кнопка закрытия попапа"
            type="button"
          ></button>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Кнопка закрытия попапа"
            type="button"
          ></button>
          <form className="popup__form" name="popup__form-confirm" noValidate>
            <fieldset className="popup__input-container">
              <legend className="popup__title">Вы уверены ?</legend>
            </fieldset>
            <button type="submit" className="popup__btn-safe ">
              Да
            </button>
          </form>
        </div>
      </div>

      <template className="template-element">
        <article className="element">
          <button
            className="element__delete"
            type="button"
            aria-label="Кнопка удаления карточки"
          ></button>
          <img
            src="<%=require('./images/elem-1.jpg')%>"
            alt="Большая голубая дыра"
            className="element__img"
          />
          <div className="element__title-group">
            <h2 className="element__title">Большая голубая дыра </h2>
            <div className="element__group">
              <button
                className="element__like"
                type="button"
                aria-label="Кнопка лайка"
              ></button>
              <p className="element__like-counter">1</p>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
