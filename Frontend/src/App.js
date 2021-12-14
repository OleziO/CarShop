import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarPage from './CarPage/CarPage';
import CarCardsSections from './CarCardsSection/CarCardsSections'
import Menu from './Menu/Menu';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import ContactPage from './ContactPage/ContactPage';
import { useSelector } from "react-redux";

function App() {
  const link = useSelector((state) => state.car.value);

  return (
      <div className="appWrapper">
        <BrowserRouter>
          <Menu />
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/cars' element={<CarCardsSections />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path={link} element={<CarPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
