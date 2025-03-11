import { useEffect } from 'react';
import { GuessComponent } from './GuessComponent';

export const Guess = ({ wordLength, word, guesses, setWOrL, errors, setErrors, maxErrors }) => {
    useEffect(() => {
        const allLettersGuessed = word
            .split('')
            .filter(letter => /[a-zA-Z]/.test(letter))
            .every(letter => guesses.includes(letter.toUpperCase()));

        if (allLettersGuessed) {
            setWOrL('win');
        }

        const incorrectGuesses = guesses.filter(guess => !word.toUpperCase().includes(guess));
        setErrors(incorrectGuesses.length);
    }, [word, guesses, setWOrL, setErrors]);

    if (errors >= maxErrors) {
        setWOrL('lose');
    }

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