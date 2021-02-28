import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BagdeNew';
import Badges from './pages/Badges';
import App from './components/App';

const element = <h1>Hello, Platzi Badges from React!</h1>

const container = document.getElementById('root');

ReactDom.render(<App/>, container);
