export const GuessComponent = ({ nonLetter }) => {
    const className = `guessComponent ${nonLetter !== '' ? 'noBackground' : ''}`;

    return (
        <span className={className}>
            {nonLetter}
        </span>
    );
};