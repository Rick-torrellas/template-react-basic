import './App.css';
import {Helmet} from "react-helmet";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import config from "./config";
function App() {
  return (
    <div >
      <Helmet> 
        <title>{config.titleSite}</title>
      </Helmet>
      <Navigation />
      <Footer />
    </div>
  );
}
export default App;
