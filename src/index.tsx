import ReactDOM from 'react-dom';
import './assets/styles/bootstrap.css';
import './assets/styles/app.css';
import { BrowserRouter } from 'react-router-dom';
import { PageLayout } from './pages/layout';

ReactDOM.render(
  <BrowserRouter>
    <PageLayout />,
  </BrowserRouter>,
  document.getElementById('root')
);
