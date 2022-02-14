import { FC } from 'react';
import airdrops from '../../data/airdrops.json';

export const AirdropPage: FC<any> = (props) => (
  <div className="home">
    <section id="portfolio">
      <div className="container">
        <h3>Cosmos Airdrops</h3>
        <div className="row">
          {airdrops.map((e, i) => (
            <div key={i} className="col-md-6 col-lg-6 col-xl-4">
              <a href={e.link_refer} target="_blank" rel="noreferrer">
                <div className="card">
                  <div className="card-logo"><img height={90} width={90} src={require(`../../assets/icons/${e.icon}`)} alt="" /></div>
                  <div className="card-body">
                    <h5 className="card-title">{e.project_name}</h5>
                    <div className="card-status">
                      <div className="status-h">Status</div>
                      <div className="status">{e.status}</div>
                      <div className="status-h">Snapshot</div>
                      <div className="status">{e.snapshot}</div>
                      <div className="status-h">Claim Start</div>
                      <div className="status">{e.claim_start}</div>
                      <div className="status-h">Claim End</div>
                      <div className="status">{e.claim_end}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);