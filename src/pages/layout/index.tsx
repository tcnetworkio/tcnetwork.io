import { FC } from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { routers } from './routers';
import {
  Routes,
  Route
} from 'react-router-dom';

export const PageLayout: FC<any> = (props) => (
  <div>
    <div id="__layout">
      <div id="tcnetwork">
        <Header />
        <Routes>
          {routers.map((e, i) => <Route key={i} index={e.index} path={e.path} element={e.component} />)}
        </Routes>
        <Footer />
      </div>
    </div>
  </div>
);