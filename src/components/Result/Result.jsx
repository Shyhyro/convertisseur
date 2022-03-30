
export const Result = ({from, to, input}) => {
    return (
        <div className="result">
            <h2>Converted Amount:</h2>
            <p>{input * 1000} {to}</p>
        </div>
    )
}