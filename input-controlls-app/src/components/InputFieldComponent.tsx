import style from './InputFieldComponent.module.css';

function InputFieldComponent(props: {
    labelText: string;
    maxLabelWidth: string;
    minWidth: string;
    setMethod: any;
}) {
    const { labelText, maxLabelWidth, minWidth, setMethod } = props;

    function Change(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setMethod(event.target.value);
    }

    return (
        <div className={style.container}>
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
                <textarea
                    style={{ width: minWidth }}
                    onChange={Change}
                ></textarea>
            </div>
        </div>
    );
}

export default InputFieldComponent;
