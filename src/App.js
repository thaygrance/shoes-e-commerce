import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import GlobalStyle from './styles/global';

import { Home } from "./pages/Home";
import { ShoesDetails } from "./pages/ShoesDetails";
import { Cart } from "./pages/Cart"

function App() {
    return (
        <Router>
        <Routes>
          <Route  path="/" element={ <Home/> } />
          <Route path="/shoppingcart"  element={ <Cart/> } />
          <Route path="/shoesdetails/:id"  element={ <ShoesDetails/>} />
        </Routes>
        <GlobalStyle />
      </Router>
    );
}

export default App;