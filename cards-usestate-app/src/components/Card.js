import style from './Card.module.css';

function Card({ element }) {
    return (
        <div className={style.cardElement}>
            {element.color === 'headerGreenElement' && (
                <div className={style.headerGreenElement}>
                    <h3 className={style.headerElement}>{element.title}</h3>
                </div>
            )}
            {element.color === 'headerLightblueElement' && (
                <div className={style.headerLightblueElement}>
                    <h3 className={style.headerElement}>{element.title}</h3>
                </div>
            )}
            {element.color === 'headerBlueElement' && (
                <div className={style.headerBlueElement}>
                    <h3 className={style.headerElement}>{element.title}</h3>
                </div>
            )}
            <div className={style.priceElement}>
                <div className={style.background}></div>
                <h3>{element.price}</h3>
            </div>
            {element.firstText ? (
                <div className={style.textElement}>
                    <p className={style.falseColor}>&#10006;</p>
                    <p>Sample text here</p>
                </div>
            ) : (
                <div className={style.textElement}>
                    <p className={style.trueColor}>&#10004;</p>
                    <p>Sample text here</p>
                </div>
            )}
            {element.secondText ? (
                <div className={style.textElement}>
                    <p className={style.falseColor}>&#10006;</p>
                    <p>Sample text here</p>
                </div>
            ) : (
                <div className={style.textElement}>
                    <p className={style.trueColor}>&#10004;</p>
                    <p>Sample text here</p>
                </div>
            )}
            {element.thirdText ? (
                <div className={style.textElement}>
                    <p className={style.falseColor}>&#10006;</p>
                    <p>Sample text here</p>
                </div>
            ) : (
                <div className={style.textElement}>
                    <p className={style.trueColor}>&#10004;</p>
                    <p>Sample text here</p>
                </div>
            )}
            {element.fourthText ? (
                <div className={style.textElement}>
                    <p className={style.falseColor}>&#10006;</p>
                    <p>Sample text here</p>
                </div>
            ) : (
                <div className={style.textElement}>
                    <p className={style.trueColor}>&#10004;</p>
                    <p>Sample text here</p>
                </div>
            )}
            {element.color === 'headerGreenElement' && (
                <button className={style.greenButton}>Select package</button>
            )}
            {element.color === 'headerLightblueElement' && (
                <button className={style.lightBlueButton}>
                    Select package
                </button>
            )}
            {element.color === 'headerBlueElement' && (
                <button className={style.blueButton}>Select package</button>
            )}
        </div>
    );
}

export default Card;
