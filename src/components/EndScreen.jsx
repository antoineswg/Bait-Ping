export const EndScreen = ({ wOrL, locale, setLocale, setWord, word, language, errors }) => {

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


    const twitterContent = `${language === "fr" ? "Je viens de trouver le nom d'un" : "I just found the name of a"}${locale === "lol" && language === "en" ? "" : "n"}${locale === "lol" ? " champion " : " agent "}${language === "fr" ? "de " : "from "}${locale === "lol" ? "League of Legends " : "Valorant "}${errors === 0 ? (language === "fr" ? "en ne faisant aucune erreur sur Bait Ping !" : "without a single mistake on Bait Ping !") : errors === 1 ? (language === "fr" ? "en seulement 1 erreur sur Bait Ping" : "in just 1 mistake on Bait Ping") : (language === "fr" ? "en faisant " + errors + " erreurs sur Bait Ping" : "with " + errors + " mistakes on Bait Ping")}`;

    function shareTwitter() {
        const tweet = 'https://twitter.com/intent/tweet?text='+ twitterContent;
        window.open(tweet, '_blank');
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
                            <button onClick={shareTwitter}>Partager sur Twitter</button>
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