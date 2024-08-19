function SelectFormComponent(props: {
    labelText: string;
    minWidth: string;
    maxLabelWidth: string;
    setMethod: any;
}) {
    const { labelText, minWidth, maxLabelWidth, setMethod } = props;

    function Change(event: React.ChangeEvent<HTMLSelectElement>) {
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
                <label style={{ width: maxLabelWidth }}>{labelText}</label>
            </div>
            <div style={{ width: '10vw' }}>
                <select style={{ width: minWidth }} onChange={Change}>
                    <option>(Press select a country)</option>
                    <option>US</option>
                    <option>UA</option>
                </select>
            </div>
        </div>
    );
}

export default SelectFormComponent;
