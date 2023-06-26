import { Phone } from '../types';
import MasterComponent from './MasterComponent';
import GridComponents from './GridComponents';


function Home({ items }: { items: Phone[] }) {
    const [masterPhone, ...otherPhones] = items;

    return (
        <div className="space-y-4 dark:bg-gray-800">
            <MasterComponent phone={masterPhone} />
            <GridComponents phones={otherPhones} />
        </div>
    );
}

export default Home;