import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
import { Link } from "react-scroll";
import { Element } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';

const menus = [
  {
    title: 'Home',
    name: 'scroll-home'
  },
  {
    title: 'Airdrops',
    name: 'scroll-airdrop'
  },
  {
    title: 'Staking',
    name: 'scroll-staking'
  },
  {
    title: 'Validators',
    name: 'scroll-validator'
  },
  {
    title: 'About Us',
    name: 'scroll-about'
  },
];

export const Header: FC<any> = (props) => {
  const location = useLocation();
  console.log(location);

  return (
    <header id="header">
      <Element name='scroll-home' />
      {/* <div className="delegate">
        <p><i className="icon icon-shield" /> <span>The Internet of Blockchains. (Under Construction)</span></p>
      </div> */}
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container">
          <NavLink to={'/'} className="navbar-brand nuxt-link-exact-active nuxt-link-active">
            <img src={LogoIcon} width={41} height={38} alt="" className="d-inline-block align-top" />
            TC NETWORK
          </NavLink>
          {
            location.pathname !== '/airdrop' && (
              <>
                 <button type="button" aria-label="Toggle navigation" aria-controls="nav_collapse" data-toggle="collapse" data-target="#nav_collapse" aria-expanded="false" className="navbar-toggler"><span className="navbar-toggler-icon" /></button>
                <div id="nav_collapse" className="navbar-collapse collapse">
                  <ul className="navbar-nav ml-auto">
                    {menus.map((m, i) => (
                      <li key={i} className="nav-item">
                        <Link to={m.name} spy={true} smooth={true} duration={400} className={`nav-link ${m.name === 'scroll-home' ? 'nuxt-link-exact-active nuxt-link-active' : ''}`}>
                          {m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
};