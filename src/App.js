import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import Footer from './Components/Shared/Footer/Footer';
import NavBar from './Components/Shared/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <NavBar/>
        <Banner />
        <Services />
        <About/>
        <Products/>
        <Contact></Contact>
        <Switch>
          <Route>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
