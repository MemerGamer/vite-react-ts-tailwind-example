import { Phone } from './types';
import Navbar from './components/Navbar';
import MasterComponent from './components/MasterComponent';
import GridComponents from './components/GridComponents';

interface AppProps {
  items: Phone[];
}

function App({ items }: AppProps) {
  const [masterPhone, ...otherPhones] = items;

  return (
    <div className="space-y-4 dark:bg-gray-800">
      <Navbar />

      <MasterComponent phone={masterPhone} />
      <GridComponents phones={otherPhones} />
    </div>
  );
}

export default App;
