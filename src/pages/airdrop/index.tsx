import { FC } from 'react';
import portfolioList from '../../portfolio/portfolio.json';

export const AirdropPage: FC<any> = (props) => (
  <div className="home">
    <section id="portfolio">
      <div className="container">
        <h3>Portfolio</h3>
        <div className="row">
          {portfolioList.map((e, i) => (
            <div key={i} className="col-md-6 col-lg-6 col-xl-4">
              <a href={e.link} target="_blank" rel="noreferrer">
                <div className={`card ${e.name.length > 8 ? 'pr-0' : ''}`}>
                  <div className="card-logo"><img height={90} width={90} src={require(`../../assets/icons/${e.logo}`)} alt="" /></div>
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <div className="card-status">
                      <div className="status-h">Status</div>
                      <div className="status">{e.status}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
          <div className="col-md-6 col-lg-6 col-xl-4">
            <a href="https://t.me/tcnetworkannoucement" target="_blank" rel="noreferrer">
              <div className="card">
                <div className="card-logo"><img height={46} width={46} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiI+CiAgICA8cGF0aCBmaWxsPSIjRkRGRUZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My41IDI2SDI1djE3LjVhMi41IDIuNSAwIDEgMS01IDBWMjZIMi41YTIuNSAyLjUgMCAxIDEgMC01SDIwVjIuNWEyLjUgMi41IDAgMSAxIDUgMFYyMWgxOC41YTIuNSAyLjUgMCAxIDEgMCA1eiIvPgo8L3N2Zz4K" alt="" /></div>
                <div className="card-body">
                  <h5 className="card-title">Contact Us</h5>
                  <p className="card-text">
                    if you’re looking for a validator
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);