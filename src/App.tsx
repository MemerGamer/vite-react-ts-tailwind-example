import Navbar from './components/Navbar';
import Home from './components/Home';
import Notfound from './components/Notfound';
import { Phone } from './types';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
interface AppProps {
  items: Phone[];
}
function App({ items }: AppProps) {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
