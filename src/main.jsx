//libs
import {createRoot} from 'react-dom/client';
//components
import App from './App';
//styling
import './scss/main.scss';
//dom elements
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);
