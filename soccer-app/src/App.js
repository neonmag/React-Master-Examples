import './App.css';
import randomNumber from './utils/randomNumber';
import ClubInfo from './components/ClubInfo';
import AwardsInfo from './components/AwardsInfo';
import TeamInfo from './components/TeamInfo';

const team = [
  'Alex',
  'Bob',
  'Cigal',
  'Dmitry',
  'Egor',
  'Falcony',
  'Gregory',
  'Uki',
  'Rick',
  'Morty',
  'Jack',
];

function App() {
  const style = randomNumber(2) > 1 ? 'red-components' : 'blue-components';

  return (
    <div className="App">
      <ClubInfo
        clubName="Arsenal"
        city="London"
        date="11.11.11"
        crest="https://www.pngall.com/wp-content/uploads/11/Arsenal-F.C-Logo-PNG-Image.png"
        styleClass={style}
      />
      <AwardsInfo
        medals={randomNumber(100)}
        cup={randomNumber(100)}
        goals={randomNumber(100)}
        wins={randomNumber(100)}
        loses={randomNumber(100)}
        styleClass={style}
      />
      <TeamInfo team={team} styleClass={style} />
    </div>
  );
}

export default App;
