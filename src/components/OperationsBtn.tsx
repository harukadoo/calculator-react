interface operationsProps{
    add: () => void;
    subtract: () => void;
    divide: () => void;
    multiply: () => void;
    exponent: () => void;
}

export const Operations = ({add, subtract, divide, multiply, exponent}: operationsProps) => {
    return (
        <div>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={divide}>/</button>
            <button onClick={multiply}>*</button>
            <button onClick={exponent}>^</button>
        </div>
    )
}