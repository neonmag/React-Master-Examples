import style from './CheckboxFormComponent.module.css';

function CheckboxFormComponent(props: {
    labelText: string;
    firstContent: string;
    secondContent: string;
    maxLabelWidth: string;
    setMethod: any;
}) {
    const { labelText, firstContent, secondContent, maxLabelWidth, setMethod } =
        props;
    function Change(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = event.target;
        if (name == 'first') {
            const secondCheckbox = document.querySelector(
                'input[name="second"]'
            ) as HTMLInputElement;
            if (secondCheckbox) {
                secondCheckbox.checked = !checked;
            }
            setMethod(firstContent);
        } else if (name === 'second') {
            const firstCheckbox = document.querySelector(
                'input[name="first"]'
            ) as HTMLInputElement;
            if (firstCheckbox) {
                firstCheckbox.checked = !checked;
            }
            setMethod(secondContent);
        }
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
                <label style={{ width: maxLabelWidth, textAlign: 'end' }}>
                    {labelText}
                </label>
            </div>
            <div className={style.containerElement}>
                <div>
                    {firstContent}
                    <input name="first" type="checkbox" onChange={Change} />
                </div>
                <div>
                    {secondContent}
                    <input name="second" type="checkbox" onChange={Change} />
                </div>
            </div>
        </div>
    );
}

export default CheckboxFormComponent;
