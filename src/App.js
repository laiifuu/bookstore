import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import BooksPage from './components/BooksPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
