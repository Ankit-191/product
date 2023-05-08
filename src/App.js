
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Premium from './components/Premium';
import Airmax from './components/Airmax';
import Footer from './components/Footer';
import RelatedProduct from './components/RelatedProduct';


function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Premium/>
      <Airmax/>
      <RelatedProduct/>
      <Footer/>
    </>
  );
}

export default App;
