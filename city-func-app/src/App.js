import './App.css';
import BioInformation from './components/BioInformation';
import AgeInformation from './components/AgeInformation';
import PortraitInformation from './components/PortraitInformation';

const images = [
  'https://img.hotels24.ua/photos/ria/news_content/110/11053/1105343/1105343.jpg',
  'https://dumskaya.net/pics/b9/picturepicture19822_80686.jpg',
];

function App() {
  return (
    <div className="App">
      <BioInformation name="Odessa" country="Ukraine" />
      <AgeInformation age="609" date="1415" />
      <PortraitInformation image={images} />
    </div>
  );
}

export default App;
