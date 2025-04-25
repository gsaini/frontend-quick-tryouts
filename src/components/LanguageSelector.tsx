import React, { useState } from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const {t} = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    /**
     * Custom Styled Select Box.
     * Ref: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select
     */
    <select
      className="language-selector"
      value={language}
      onChange={changeLanguage}
    >
      <option value="en" >
        {t("English")}
      </option>
      <option value="es" >
        {t("Spanish")}
      </option>
    </select>
  );
};

export default LanguageSelector;