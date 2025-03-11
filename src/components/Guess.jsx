import { useEffect } from 'react';
import { GuessComponent } from './GuessComponent';

export const Guess = ({ wordLength, word, guesses, setWOrL, setErrors }) => {
    useEffect(() => {
        const allLettersGuessed = word
            .split('')
            .filter(letter => /[a-zA-Z]/.test(letter))
            .every(letter => guesses.includes(letter.toUpperCase()));

        console.log(allLettersGuessed);

        if (allLettersGuessed) {
            setWOrL('win');
        }
    }, [word, guesses, setWOrL]);

    return (
        <div className='guess'>
            {Array.from({ length: wordLength }).map((_, index) => {
                const letter = word[index];
                const guessed = /[a-zA-Z]/.test(letter) ? "" : letter;
                const guessedLetter = guesses.includes(letter.toUpperCase()) ? letter : guessed;
                return <GuessComponent key={index} guessed={guessedLetter} />;
            })}
        </div>
    );
};