
export const Result = ({from, to, input}) => {
    let result = 0;

    if (from === to) {
        result = input;
    }
    else {
        result = input * 1000;
    }

    return (
        <div className="result">
            <h2>Converted Amount:</h2>
            <p>{result} {to}</p>
        </div>
    )
}