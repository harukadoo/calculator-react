interface resultProps{
    result: number;
}

export const Result = ( {result}: resultProps ) => {
    return <p>{result}</p>
}