import React from 'react';
import logo from '../assets/react.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const {t} = useTranslation();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      <div className="header-right">
        <div className="notifications-icon">{t("notifications")}</div>
        <div className="profile">
          <div className="profile-image" />
          <span className="profile-name">Gopal Saini</span>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;