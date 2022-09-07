import { FC } from 'react';
import LogoIcon from '../../assets/icons/flavor.svg';

export const Footer: FC<any> = (props) => (
  <footer id="footer">
    <div className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="navbar-brand" >
          <img src={LogoIcon} width={41} height={38} alt="" className="d-inline-block align-top" style={{ borderRadius: '100%', border: '1px solid #e19605' }} />
          TC NETWORK
        </div>
        <div className="based">
          Be part of the future!
        </div>
        <ul className="nav social">
          <li><a href="https://t.me/tcnetworkannoucement" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><i className="icon icon-telegram" /></a></li>
          <li><a href="https://twitter.com/TCNetwork_io" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="icon icon-twitter" /></a></li>
        </ul>
      </div>
    </div>
  </footer>
);