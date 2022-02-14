import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';

export const Page404: FC<any> = (props) => (
  <div className="home">
    <section id="about" style={{ paddingTop: 200 }}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 order-2 order-lg-0"><img src={LogoIcon} width={215} height={200} alt="" className="d-inline-block align-top" /></div>
          <div className="col-lg-6 order-0 order-lg-2">
            <h3>Page not found</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
);