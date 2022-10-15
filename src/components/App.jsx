import Header from "./Heades";
import Main from "./Main";
import Footer from "./Footer";
// import PopupWithForm from "./PopupWithForm";
import EditProfile from "./EditProfilePopup";
import EditProfileAvatar from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

import { useState, useEffect } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <EditProfile isOpen={isEditProfilePopupOpen} />
      <EditProfileAvatar isOpen={isEditAvatarPopupOpen} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} />
    </>
  );
}

export default App;
