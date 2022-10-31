import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleClick = () => {
    onCardClick(card.link);
  };

  const handleLikeCard = () => {
    return onCardLike(card);
  };

  //Delete icon
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `${
    isOwn ? "element__delete" : "element__delete__hidden"
  }`;

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : " "
  }`;

  return (
    <article className="element">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Кнопка удаления карточки"
      />
      <img
        src={card.link}
        alt={card.name}
        className="element__img"
        onClick={handleClick}
      />
      <div className="element__title-group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__group">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Кнопка лайка"
            onClick={handleLikeCard}
          />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
