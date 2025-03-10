export const GuessComponent = ({ guessed }) => {
    const className = `guessComponent ${guessed !== '' ? 'noBackground' : ''}`;

    return (
        <span className={className}>
            {guessed.toUpperCase()}
        </span>
    );
};