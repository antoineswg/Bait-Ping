export const EndScreen = ({ wOrL, locale, setLocale, setWord, word }) => {

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

    if (wOrL != '') {
        if (wOrL === 'win') {
            return (
                <div className="endScreen">
                    <div className="endScreenContent">
                        <h1>Gagné ! Vous avez correctement deviné {word.toUpperCase()}</h1>
                        <div>
                            <button onClick={changeLocale}>Changer de jeu</button>
                            <button onClick={changeWord}>Changer de personnage</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="endScreen">
                    <div className="endScreenContent">
                        <h1>Perdu, le personnage était {word.toUpperCase()}</h1>
                        <div>
                            <button onClick={changeLocale}>Changer de jeu</button>
                            <button onClick={changeWord}>Changer de personnage</button>
                        </div>
                    </div>
                </div>
            );
        }
    }

};