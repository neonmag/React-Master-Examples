import './App.css';
import Band from './components/Band';

const team = ['George', 'Alik', 'Billy'];
const albums = ['FirstAlbum', 'SecondAlbum', 'ThirdAlbum'];
const posters = [
  'https://ir-3.ozone.ru/s3/multimedia-x/c1000/6714026709.jpg',
  'https://stypos.com.ua/content/images/11/756x900l85nn0/poster-bez-ramki-louis-armstrong-v-rozmiri-50kh50-96792767232951.jpg',
  'https://content.rozetka.com.ua/goods/images/big_tile/323529393.jpg',
];

function App() {
  return (
    <div className="App">
      <Band bandName="IT" team={team} albums={albums} posters={posters} />
    </div>
  );
}

export default App;
