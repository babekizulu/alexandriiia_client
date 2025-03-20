//libs
import {createRoot} from 'react-dom/client';
//components
import App from './App';
//context
import {Provider} from './context/ALXContext';
//styling
import './scss/main.scss';
//dom elements
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Provider><App /></Provider>);
