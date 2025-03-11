export const Keyboard = ({ language, deactivatedKeys, setDeactivatedKeys }) => {

    const printKeyboard = (layout) => {
        return (
            <div>
                {layout.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((key, keyIndex) => (
                            <button 
                                key={keyIndex} 
                                onClick={guess} 
                                disabled={deactivatedKeys.includes(key)}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    const layoutFr = [
        ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
        ['W', 'X', 'C', 'V', 'B', 'N']
    ];

    const layoutEn = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const guess = (event) => {
        const key = event.target.innerText;
        event.target.setAttribute('disabled', 'disabled');
        setDeactivatedKeys(prevKeys => [...prevKeys, key]);
    }

    return (
        <div className='keyboard'>
            {printKeyboard(language === 'fr' ? layoutFr : layoutEn)}
        </div>
    );
};