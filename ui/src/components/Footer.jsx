import React from 'react'
import { useTranslation } from "react-i18next";


function Footer() {
    const { t, i18n } = useTranslation();
  return (
    <div>
    <footer className = "footer">
        <span>{t("right")} Onur Çelikler</span>
    </footer>
</div>
  )
}

export default Footer