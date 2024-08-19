function SubmitButtonComponent(props: { setMethod: any }) {
    const { setMethod } = props;

    function Click(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setMethod();
    }

    return (
        <div
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
        >
            <button type="submit" onClick={Click}>
                Submit
            </button>
        </div>
    );
}

export default SubmitButtonComponent;
