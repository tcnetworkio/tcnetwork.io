import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';

const menus = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Airdrops',
    path: '/airdrop',
  },
  {
    title: 'Staking',
    path: '/stake',
  },
  {
    title: 'Validators',
    path: '/validator',
  },
  {
    title: 'About Us',
    path: '/about',
  },
];

export const Header: FC<any> = (props) => (
  <header id="header">
    <div className="delegate">
      <p><i className="icon icon-shield" /> <span>The Internet of Blockchains. (Website is under maintenance)</span></p>
    </div>
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container"><a href="https://tcnetwork.io" target="_self" className="navbar-brand nuxt-link-exact-active nuxt-link-active"><img src={LogoIcon} width={41} height={38} alt="" className="d-inline-block align-top" />
        TC NETWORK
      </a> <button type="button" aria-label="Toggle navigation" aria-controls="nav_collapse" data-toggle="collapse" data-target="#nav_collapse" aria-expanded="false" className="navbar-toggler"><span className="navbar-toggler-icon" /></button>
        <div id="nav_collapse" className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            {menus.map((m, i) => (
              <li className="nav-item">
                <NavLink
                  title={m.title}
                  key={i}
                  to={m.path}
                  className={(props) => {
                    return `nav-link ${props.isActive ? 'nuxt-link-exact-active nuxt-link-active ' : ''}`;
                  }}
                >
                  {m.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);