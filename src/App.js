import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navabar'
import HeroSection from './components/heroSection/HeroSection'
import MainSection from './components/mainSection/MainSection'
import Foooter from './components/footer/Foooter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <HeroSection />
          <MainSection />
          <Foooter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
