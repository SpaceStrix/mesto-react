import React from "react";

// function Card({card: {link, name, likes}, onCardClick}) {
function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <button
                className="element__delete"
                type="button"
                aria-label="Кнопка удаления карточки"
            />
            <img
                src={props.card.link}
                alt={props.card.link}
                className="element__img"
                onClick={handleClick}

            />
            <div className="element__title-group">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__group">
                    <button
                        className="element__like"
                        type="button"
                        aria-label="Кнопка лайка"
                    />
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    );
}

export default Card;
