import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
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
              Staking crypto tokens made simple
            </h1>
            <h2>
              Choose us to be your validator!
            </h2>
            <p>
              We are a team of tech-savvy blockchain developers and enthusiasts who run nodes on PoS and PoA
              blockchains. We took care all of the technical setup needed so that you could easily stake your
              assets.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center"><img src="assets/icons/process.svg" alt="" className="img-fluid" />
          </div>
        </div> <a href="https://look.chillvalidation.com/dig/staking/digvaloper1sqcn85px4dtmdjlvfraqn0fq332020akrh8mst" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Staking Now</a>
      </div>
    </section>
    <section id="about" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 order-2 order-lg-0"><img src={LogoIcon} width={215} height={200} alt="" className="d-inline-block align-top" /></div>
          <div className="col-lg-6 order-0 order-lg-2">
            <h3>About Us</h3>
            <p>TC NETWORK is a unique team of highly trained professionals specialized in operating validator
              nodes
              and based in Seattle, Washington. We have a proven track record as an infrastructure operator
              for PoA and PoS networks.
              We believe that these technologies will form the next significant chapter
              in the blockchain revolution. Our mission is to help retail and institutional investors stake
              their crypto assets and earn rewards while we do
              all the hard work.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <div className="container">
        <h3>Portfolio</h3>
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
    <section id="features">
      <div className="container">
        <h3>Technical Features</h3>
        <div className="row pt-0 d-flex align-items-center">
          <div className="col-lg-6 order-2 order-lg-0 d-flex justify-content-center align-items-center"><img src="asset/img/technical_feature.svg" alt="" className="img-fluid" /></div>
          <div className="col-lg-6 order-0 order-lg-2">
            <h4>Cosmos validator</h4>
            <p>
              We are operating one of the genesis validators for the cosmos network
              and have been participating in testnet ecosystem since gaia-5000.
              We were one of the 27 validators (out of 200) who has never been
              jailed during the Game of Stakes. Our Validator node can’t be accessed
              from the internet and protected by layers of private and public sentries
              located around the world.
            </p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <h4>Infrastructure</h4>
            <p>
              Best-in-class network connectivity for speed and throughput.
              Automatic system-level backups at regular intervals.
              Redundant validator server setup is available to switch at the moment’s notice.
              Multiple data replications across different racks, reducing the chances
              of data loss in case of hardware failure.
              All of the access points protected by multi-factor authentication (MFA).
            </p>
            <p>
              Key management.
            </p>
            <p>
              We plan to utilize multisig wallet setup as well as recurring key rotation once
              functionality becomes available.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center"><img src="asset/img/infrastructure.svg" alt="" className="img-fluid" /></div>
        </div>
        <div className="row pb-0 d-flex align-items-center">
          <div className="col-lg-6 order-2 order-lg-0 d-flex justify-content-center align-items-center"><img src="asset/img/delegation.svg" alt="" className="img-fluid" /></div>
          <div className="col-lg-6 order-0 order-lg-2">
            <h4>Delegation</h4>
            <p>
              After the Cosmos mainnet launch, you will be able to stake atoms
              with our validator as a third-party delegator:
            </p>
            <p>
              Atoms Delegated: 1,711,492
            </p>
            <p>
              Commission rate: 7%
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Contact us</h3>
            <p>
              Reach out to us if you have any questions
              or need help with delegation instructions.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row justify-content-end mailbox">
              <div className="col-lg-8"><a href="https://t.me/tcnetworkannoucement" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary btn-lg">MESSAGE NOW</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);