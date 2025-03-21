import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeP from './pages/home';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={
            <div>
              <HomeP />
            </div>
          } />
          <Route path="/about" element={<>About page</>} />
          <Route path="*" element={<>Not founded</>} />
        </Routes>

      </div>
    </>
  );
}

export default App;
