export const Header = ({ language, setLanguage, locale, setLocale, data, setWord }) => {

  function changeLanguage() {
    switch (language) {
      case "fr":
        setLanguage("en");
        break;
      case "en":
        setLanguage("fr");
        break;
      default:
        setLanguage("fr");
    }
  }

  function changeLocale() {
    switch (locale) {
      case "lol":
        setLocale("val");
        setWord("");
        break;
      case "val":
        setLocale("lol");
        setWord("");
        break;
      default:
        setLocale("lol");
        setWord("");
    }
  }

  function changeWord() {
    switch (locale) {
      case "lol":
        setWord("");
        break;
      case "val":
        setWord("");
        break;
      default:
        setWord("");
    }
  }

  

  return (
    <div>
      <button onClick={changeLanguage}>changer la langue</button>
      <button onClick={changeLocale}>changer le jeu</button>
      <button onClick={changeWord}>changer de personnage</button>
      <br />
      <h1>{data.test1} {language === "fr" ? "français" : "english"} {data.test2} {locale === "lol" ? "League of Legends" : "Valorant"}</h1>
    </div>

  );
};