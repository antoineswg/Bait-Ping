import { GuessComponent } from './GuessComponent';


export const Guess = ({wordLenght, word, guesses}) => {
  
    return (
        <div className='guess'>
            {Array.from({ length: wordLenght }).map((_, index) => {
                const letter = word[index];
                const guessed = /[a-zA-Z]/.test(letter) ? "" : letter;
                const guessedLetter = guesses.includes(letter.toUpperCase()) ? letter : guessed;
                return <GuessComponent key={index} guessed={guessedLetter} />;
            })}
            {guesses}
        </div>
    );
  };