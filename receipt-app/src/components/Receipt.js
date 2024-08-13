function Receipt(props) {
  const { receiptName, ingredients, cookingSequence, image } = props;

  return (
    <div>
      <h1>Receipt: {receiptName}</h1>
      <h1>Ingredients</h1>
      <ul>
        {ingredients.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
      <ul>
        {cookingSequence.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
      <img src={image} />
    </div>
  );
}

export default Receipt;
