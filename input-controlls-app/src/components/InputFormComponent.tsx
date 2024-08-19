function InputFormComponent(props: {
    labelText: string;
    minWidth: string;
    maxLabelWidth: string;
    setMethod: any;
}) {
    let { labelText, minWidth, maxLabelWidth, setMethod } = props;

    function Change(event: React.ChangeEvent<HTMLInputElement>) {
        setMethod(event.target.value);
    }

    return (
        <div
            style={{
                display: 'flex',
                marginBottom: '20px',
                width: '40vw',
                justifyContent: 'row',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    width: '20vw',
                    alignItems: 'flex-end',
                }}
            >
                <label
                    style={{
                        marginRight: '10px',
                        textAlign: 'end',
                        width: maxLabelWidth,
                    }}
                >
                    {labelText}
                </label>
            </div>
            <div style={{ width: '10vw' }}>
                <input
                    type="text"
                    style={{ width: minWidth }}
                    onChange={Change}
                />
            </div>
        </div>
    );
}

export default InputFormComponent;
