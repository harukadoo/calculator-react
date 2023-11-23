interface inputsProps {
    value1: number;
    setInputValue1: (value: number) => void;
    value2: number;
    setInputValue2: (value: number) => void;
}

export const Inputs = ({ value1, setInputValue1, value2, setInputValue2 }: inputsProps) => {
    const handleFirstInputChange = (e: any) => {
        const newValue = +e.target.value; 
        setInputValue1(newValue);
    };

    const handleSecondInputChange = (e: any) => {
        const newValue = +e.target.value; 
        setInputValue2(newValue);
    };
    return (
        <div>
            <input type="number"
                value={value1}
                onChange={handleFirstInputChange} />

            <br />

            <input type="number"
                value={value2}
                onChange={handleSecondInputChange} />
        </div>
    )
}