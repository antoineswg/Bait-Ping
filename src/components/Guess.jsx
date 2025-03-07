import { GuessComponent } from './GuessComponent';


export const Guess = ({wordLenght, word}) => {
  
    return (
        <div className='guess'>
            {Array.from({ length: wordLenght }).map((_, index) => {
                const letter = word[index];
                const nonLetter = /[a-zA-Z]/.test(letter) ? "" : letter;
                return <GuessComponent key={index} nonLetter={nonLetter} />;
            })}
        </div>
    );
  };