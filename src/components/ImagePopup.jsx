function ImagePopup(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="img-container">
                <figure className="img-container__block">
                    <img src={props.card.link} alt="Тут должно быть изображение" className="img-container__img"
                         onClick={props.onCardClick}/>
                    <figcaption className="img-container__title">{props.card.name}</figcaption>
                </figure>
                <button
                    className="popup__close"
                    aria-label="Кнопка закрытия попапа"
                    type="button"
                    onClick={props.onClose}
                />
            </div>
        </div>
    )
}

export default ImagePopup;
