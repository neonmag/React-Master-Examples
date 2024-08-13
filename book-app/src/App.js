import './App.css';
import Book from './components/Book';

const comments = ['Beautiful!', 'Nice!', 'Good!', 'Skvazimabzabza'];

function App() {
  return (
    <div className="App">
      <Book
        bookName="IT"
        author="Stephen King"
        genre="Horror"
        amountOfPages={1000}
        comments={comments}
      />
    </div>
  );
}

export default App;
