const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card.link);
  };

  return (
    <article className="element">
      <button
        className="element__delete"
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
            className="element__like"
            type="button"
            aria-label="Кнопка лайка"
          />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
