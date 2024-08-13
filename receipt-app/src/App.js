import './App.css';
import Receipt from './components/Receipt';

const ingredients = ['Apple', 'Banana', 'Watermelon'];
const cookingSequence = ['Come', 'Cook', 'Eat'];
const image = ['https://ir-3.ozone.ru/s3/multimedia-x/c1000/6714026709.jpg'];

function App() {
  return (
    <div className="App">
      <Receipt
        receiptName="IT"
        ingredients={ingredients}
        cookingSequence={cookingSequence}
        image={image}
      />
    </div>
  );
}

export default App;
