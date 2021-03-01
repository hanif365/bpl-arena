import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header';
import Players from './components/Players/Players';


function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Players></Players>
      <BottomToTop></BottomToTop>
      <Footer></Footer>

    </div>
  );
}

function BottomToTop() {      // Bottom to top button added.
  return (
    <div>
      <a href="#" class="bottom-to-top"><FontAwesomeIcon icon={faArrowUp} /></a>
    </div>
  )
}

function Footer() {         // Footer added
  return (
    <footer id="footer-section">
      <span>@2021 <a href="https://www.espncricinfo.com/series/bpl-2020-2019-20-1207676" target="_blank" class="text-decoration-none">BPL ARENA</a>. All rights
            reserved.</span>
    </footer>
  )
}

export default App;
