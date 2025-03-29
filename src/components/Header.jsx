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
    <header>
      <div className="headerButtons">
      <button onClick={changeLanguage}>{data.changelanguage}</button>
      <button onClick={changeLocale}>{data.changegame}</button>
      <button onClick={changeWord}>{data.changeword}</button>
      </div>
      <br />
      <div>
      <h1>{data.goal}{locale === "lol" ? "League of Legends" : "Valorant"}</h1>
      </div>
    </header>

  );
};