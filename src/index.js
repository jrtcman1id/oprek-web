import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";
import "tiny-slider/dist/tiny-slider.css";
// import { tns } from 'tiny-slider/src/tiny-slider';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.scss';

function App() {
    return <>
        <Header />
        <Main />        
        <Footer />
    </>;
}

document.body.append(<App />);