import './App.css';
import CardList from './components/CardsList';

const elements = [
    {
        title: 'Basic',
        price: '$2.99',
        firstText: true,
        secondText: false,
        thirdText: false,
        fourthText: false,
        color: 'headerGreenElement',
    },
    {
        title: 'Standard',
        price: '$5.99',
        firstText: true,
        secondText: true,
        thirdText: true,
        fourthText: false,
        color: 'headerLightblueElement',
    },
    {
        title: 'Premium',
        price: '$0.99',
        firstText: true,
        secondText: true,
        thirdText: true,
        fourthText: true,
        color: 'headerBlueElement',
    },
];

function App() {
    return (
        <div className="App">
            <CardList elements={elements} />
        </div>
    );
}

export default App;
