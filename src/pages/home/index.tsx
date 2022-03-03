import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
import CosmosIcon from '../../assets/icons/cosmos.png';
import SecurityIcon from '../../assets/icons/security.svg';
import BlockIcon from '../../assets/icons/block.svg';
import EducationIcon from '../../assets/icons/education.svg';
import AlignmentIcon from '../../assets/icons/alignment.svg';
import TransparencyIcon from '../../assets/icons/transparency.svg';
import IntegrityIcon from '../../assets/icons/integrity.svg';
import portfolioList from '../../data/portfolio.json';

export const HomePage: FC<any> = (props) => (
  <div className="home">
     <section id="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
            Cosmos Airdrops
            </h1>
            <h2>
            Information about cosmos airdrops. Often updates!
            </h2>
            <p>
            With the huge amount of current and upcoming airdrops on the cosmos ecosystem it can be impossible to keep up with all the emerging information.
            Here you will find a compiled list of all currently claimable, upcoming, rumoured, and expired airdrops.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center"><img src="assets/icons/process.svg" alt="" className="img-fluid" />
          </div>
        </div> <a href="/airdrop" rel="noreferrer" className="btn btn-primary btn-lg">Check Airdrops</a>
      </div>
    </section>

    <section id="about" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 order-2 order-lg-0"><img src={CosmosIcon} width={400} height={300}  className="d-inline-block align-top" /></div>
          <div className="col-lg-6 order-0 order-lg-2">
            <h3>Staking on Cosmos Network made SIMPLE</h3>
            <p>Cosmos: The Internet of Blockchains!
              <br></br>Cosmos is an ever-expanding ecosystem of interoperable and sovereign blockchain apps and services, built for a decentralized future.
             <br></br>TC Network is a group of technical developers participating in #Cosmos blockchains, providing staking services, building dApps and supporting Cosmos projects.</p>
              <br></br>
              <a href="/stake" rel="noreferrer" className="btn btn-primary btn-lg">Staking Now</a>
          </div>
        </div>
        
      </div>
    </section>

    <section id="portfolio">
      <div className="container">
        <h3>Portfolio | Joined as the Validator!</h3>
        <div className="row">
          {portfolioList.map((e, i) => (
            <div key={i} className="col-md-6 col-lg-6 col-xl-4">
              <a href={e.home_page} target="_blank" rel="noreferrer">
                <div className={`card ${e.name.length > 8 ? 'pr-0' : ''}`}>
                  <div className="badge-corner-right"><h5><span id="badge-apy-cosmos" className="badge badge-pill badge-success badge-font">% APR</span></h5></div>
                  <div className="badge-corner-left"><h5><span id="badge-price-cosmos" className="badge badge-dark badge-font">$Price</span></h5></div>
                  <div className="card-logo"><img height={90} width={90} src={require(`../../assets/icons/${e.logo}`)} alt="" /></div>
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <div className="card-status">
                      <div className="status-h">Status</div>
                      <div className="status">{e.status}</div>
                      </div>
                     
                  </div>
                  <div className='staking'>
                     <p className="achieve" id="cosmos_token"><img src={require(`../../assets/icons/staked.png`)} alt="" />999,999</p>
                     <a className="boxed-btn" href={e.link}>Stake Now</a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="reasons">
      <div className="container">
        <h3>6 Reasons to Delegate to TCNETWORK.IO</h3>
        <div className="row">
          <div className="col-reason col-md-6 col-lg-4">
            <div className="r-icon"><img height={90} width={73} src={SecurityIcon} alt="" /></div>
            <h4>
              High-security standards
            </h4>
            <p>
              Our infrastructure consists of high-performance servers,
              enhanced DDoS protection and would continue to evolve as the network matures.
            </p>
          </div>
          <div className="col-reason col-md-6 col-lg-4">
            <div className="r-icon"><img height={90} width={82} src={BlockIcon} alt="" />
            </div>
            <h4>
              Blockchain Expertise
            </h4>
            <p>
              We are tech-savvy former engineers with a deep technical understanding
              of PoS and POA consensus focused
              on Security and Quality
              of the service provided.
            </p>
          </div>
          <div className="col-reason col-md-6 col-lg-4">
            <div className="r-icon"><img height={90} width={97} src={EducationIcon} alt="" />
            </div>
            <h4>
              Education
            </h4>
            <p>
              We are here to help you navigate the complex world of PoS system. Check out our step by step
              delegation guide and glossary.
            </p>
          </div>
          <div className="col-reason col-md-6 col-lg-4">
            <div className="r-icon"><img height={90} width={88} src={AlignmentIcon} alt="" />
            </div>
            <h4>
              Alignment
            </h4>
            <p>
              We stake tokens alongside our
              delegators to have skin in a game
              and to demonstrate our long-term interest in the networks. All payouts are calculated and processed
              automatically by the network, so you receive your portion of reward immediately
              once it is available.
            </p>
          </div>
          <div className="col-reason pb-0 col-md-6 col-lg-4">
            <div className="r-icon"><img height={90} width={73} src={TransparencyIcon} alt="" />
            </div>
            <h4>
              Transparency
            </h4>
            <p>
              We are committed being transparent about our on-chain governance decision making as well
              as our commission change rate schedule.
            </p>
          </div>
          <div className="col-reason pb-0 col-md-6 col-lg-4">
            <div className="r-icon"><img height={70} width={90} src={IntegrityIcon} alt="" />
            </div>
            <h4>
              High Integrity
            </h4>
            <p>
              We act independently with the utmost integrity. We do not tolerate collusion between entities in the
              ecosystem
              and will help guard the network against malicious cartels.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 order-2 order-lg-0"><img src={LogoIcon} width={215} height={200} alt="" className="d-inline-block align-top" /></div>
          <div className="col-lg-6 order-0 order-lg-2">
            <h3>About Us</h3>
            <p>We are a group of blockchain developers and enthusiasts who run nodes on Proof-of-Stake (PoS) blockchains. We're using the Cosmos Network Airdrop Program to collect and share the latest news from the Cosmos Network. We took care of all the technical setup so you could start staking your assets right away. We also help the Cosmos community by learning and building on the Cosmos SDK.</p>
          </div>
        </div>
        
      </div>
    </section>
    
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Connect Us</h3>
            <p>
              Reach out to us if you have any questions
              or need help with delegation instructions.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row justify-content-end mailbox">
              <div className="col-lg-8"><a href="https://t.me/tcnetwork_io" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary btn-lg">Get in touch with us!</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);