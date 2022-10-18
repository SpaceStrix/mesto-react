import React from "react";

function Card({ card:{link, name,likes}}) {
  return (
    <article className="element">
      <button
        className="element__delete"
        type="button"
        aria-label="Кнопка удаления карточки"
      />
      <img
        src={link}
        alt={link}
        className="element__img"
      />
      <div className="element__title-group">
        <h2 className="element__title">{name}</h2>
        <div className="element__group">
          <button
            className="element__like"
            type="button"
            aria-label="Кнопка лайка"
          />
          <p className="element__like-counter">{likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
