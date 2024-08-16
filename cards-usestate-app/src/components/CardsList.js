import Card from './Card';
import style from './CardsList.module.css';

function CardList({ elements }) {
    return (
        <div className={style.cardsContainer}>
            {elements.map((el, index) => {
                return <Card key={index} element={el} />;
            })}
        </div>
    );
}

export default CardList;
