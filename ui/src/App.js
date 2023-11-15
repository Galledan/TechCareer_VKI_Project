import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  const handleLang = async (lang) => {
    await i18n.changeLanguage(lang);
  };



  const [tab, setTab] = useState(1);

  

  const formTab = () => {
    setTab(1);
  };

  const listTab = () => {
    setTab(2);
  };

  return (
    <div className="App">
      <header>
        <p>{t("app")}</p>
        <div className="navs">
          <button onClick={formTab}>Form</button>
          <button onClick={listTab}>{t("list")}</button>
        </div>
        <div className="langs">
        <button onClick={() => handleLang("tr")} id="tr">
            TR
          </button>
          <button onClick={() => handleLang("en")} id="en">
            EN
          </button>
        </div>
      </header>
      <div className="content">
        {tab === 1 && (
          <div className="entry">
            <h1>{t("welcome")}</h1>
            <p>{t("please")}</p>
          </div>
        )}
        <div className="tab">
          {tab === 1 && <Form />}
          {tab === 2 && <List />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
