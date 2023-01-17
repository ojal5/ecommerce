
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import {Box} from '@mui/material';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';     //to enable routing in your peoject then wrap your application with this router
                                                          //  Routes is used to wrap components in which you want routing specificly
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider  >                  //states present inside dataprovider can now be used inside these components
      <BrowserRouter>
          <Header />
          <Box style={{marginTop:54}}>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/product/:id' element={<DetailView/>} />
              <Route path='/cart' element={<Cart/>} />
          </Routes>
          </Box>
          
      </BrowserRouter>
    </DataProvider >
  );
}

export default App;
