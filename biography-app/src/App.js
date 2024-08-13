import './App.css';
import { BioInformation } from './components/BioInformation';
import { AgeInformation } from './components/AgeInformation';
import { PortraitInformation } from './components/PortraitInformation';
import { SomeBiographyInformation } from './components/SomeBiographyInformation';

function App() {
  return (
    <div className="App">
      <BioInformation
        name="Boryslav"
        surname="Linchevsky"
        fathername="Igorevich"
      />
      <AgeInformation age="252" date="11.11.11" />
      <PortraitInformation image="https://randomuser.me/api/portraits/men/62.jpg" />
      <SomeBiographyInformation
        header="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sem, tempor at mauris non, pretium scelerisque ex. Fusce vel ex vitae risus lobortis posuere. Pellentesque ac bibendum ante, quis ornare elit. Sed convallis gravida ex non gravida. Mauris at pellentesque eros. Curabitur non tincidunt odio, sed malesuada mauris. Aenean rutrum vehicula turpis vel luctus."
      />
    </div>
  );
}

export default App;
