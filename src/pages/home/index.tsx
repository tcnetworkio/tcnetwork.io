import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
import AirdropIcon from '../../assets/icons/delegation.svg';
import CosmosIcon from '../../assets/icons/cosmos.png';
import BlockIcon from '../../assets/icons/block.svg';
import EducationIcon from '../../assets/icons/education.svg';
import AlignmentIcon from '../../assets/icons/alignment.svg';
import TransparencyIcon from '../../assets/icons/transparency.svg';
import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Validator } from './validator';


const loadNetworks = async () => {
  return await fetch('/network.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json());
}

export const HomePage: FC<any> = (props) => {
  const [networks, setNetworks] = useState<any[]>([]);

  useEffect(() => {
    loadNetworks().then(data => setNetworks(data))
  }, []);

  return (
    <div className='home'>
      {/* <div className='container'>
        <div className='col-lg-12 m-auto text-center pt-4'>
          <img src={EvmosStaking} width='90%' className='' />
        </div>
      </div> */}

      <Element name='scroll-airdrop' />
      <section id='intro' className='pt-4'>
        <div className='container pt-0'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Cosmos Airdrops</h1>
              <h2>Information about cosmos airdrops. Often updates!</h2>
              <p>
                With the huge amount of current and upcoming airdrops on the
                cosmos ecosystem it can be impossible to keep up with all the
                emerging information. Here you will find a compiled list of all
                currently claimable, upcoming, rumoured, and expired airdrops.
              </p>
            </div>
            <div className='col-lg-6 d-flex align-items-center'>
              <img src={AirdropIcon} className='img-fluid' />
              {/* <img src='assets/icons/process.svg' alt='' className='img-fluid' /> */}
            </div>
          </div>{' '}
          <a className='btn btn-primary btn-lg' href="https://airdrop.tcnetwork.io" target="_blank">
            Check Airdrops
          </a>
        </div>
        <Element name='scroll-staking' />
      </section>

      <section id='about' style={{ paddingTop: 0 }}>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-6 order-2 order-lg-0'>
              <img src={CosmosIcon} width={400} height={300} className='d-inline-block align-top' />
            </div>
            <div className='col-lg-6 order-0 order-lg-2'>
              <h3>Staking on Cosmos Network made SIMPLE</h3>
              <p>
                Cosmos: The Internet of Blockchains!
                <br></br>Cosmos is an ever-expanding ecosystem of interoperable
                and sovereign blockchain apps and services, built for a
                decentralized future.
                <br></br>TC Network is a group of technical developers
                participating in #Cosmos blockchains, providing staking services,
                building dApps and supporting Cosmos projects.
              </p>
              <br></br>
              <a href='https://explorer.tcnetwork.io' rel='noreferrer' className='btn btn-primary btn-lg'>Staking With Us</a>
            </div>
          </div>
        </div>
      </section>

      <Element name='scroll-validator'>
        <section id='portfolio'>
          <div className='container'>
            <h3>Portfolio | Joined as the Validator!</h3>
            {networks && networks.length && <Validator networks={networks} type='mainnet' />}

            {/* <h4>Joined Testnet</h4> */}
            <div className='testnet'>Testnet</div>
            {networks && networks.length && <Validator networks={networks} type='testnet' />}

            <div className='row d-flex align-items-center' style={{ marginTop: '10px' }}>
              <div className='col-lg-6'>
                <img src={'https://interchainnfts.dev/assets/img/banner.e3623744.png'} width={350} className='d-inline-block align-top' />
              </div>
              <div className='col-lg-6 align-top'>
                <h3>Game of NFTs Explorer</h3>
                <p>
                  Game of NFTs (GoN) is a two-phase event with public incentivized testing and a hackathon
                  where you can test the Interchain NFTs and build innovative NFT applications.
                  <br />
                  You can find the detailed <a href='https://interchainnfts.dev/gon/' target='_blank' rel='noreferrer'>Here</a>.
                </p>
                <a href='https://gon.tcnetwork.io' rel='noreferrer' className='btn btn-primary btn-lg'>GoN Explorer</a>
              </div>
            </div>
          </div>



        </section>
      </Element>

      <section id='reasons'>
        <div className='container'>
          <h3>Why you should stay with us!</h3>
          <div className='row'>
            <div className='col-reason col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={90} width={97} src={AlignmentIcon} alt='' />
              </div>
              <h4>Contribution</h4>
              <p>
                We are dedicated to community development with non-profit purpose. Our revenue paid for apps/tools development and maintainence cost.
              </p>
            </div>
            <div className='col-reason pb-0 col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={90} width={73} src={TransparencyIcon} alt='' />
              </div>
              <h4>Decentralize</h4>
              <p>
                Flat modeling and not under control in any groups or entities are our operational mechanisms, You-I We are creating added values for our community altogether
              </p>
            </div>
            <div className='col-reason pb-0 col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={70} width={90} src={BlockIcon} alt='' />
              </div>
              <h4>Technology</h4>
              <p>
                Follow the rules of Cosmos network, providing staking service, building tools, validating cosmos chains, sharing and training those who are interested in is our desire
              </p>
            </div>
            <div className='col-reason pb-0 col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={70} width={90} src={EducationIcon} alt='' />
              </div>
              <h4>Community</h4>
              <p>
                Build up a strong community where joint power is helping is mutual. Your asset is your choice in using it efficiently,
                we only provide informative and valuable tips to our community, will not encourage you to follow one or another.

              </p>
            </div>
          </div>
        </div>
        <Element name='scroll-about' />
      </section>

      <section id='about' style={{ paddingTop: 0 }}>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-6 order-2 order-lg-0'>
              <img
                src={LogoIcon}
                width={215}
                height={200}
                alt=''
                className='d-inline-block align-top'
              />
            </div>
            <div className='col-lg-6 order-0 order-lg-2'>
              <h3>About Us</h3>
              <p>
                We are a group of blockchain developers and enthusiasts who run
                nodes on Proof-of-Stake (PoS) blockchains. We're using the Cosmos
                Network Airdrop Program to collect and share the latest news from
                the Cosmos Network. We took care of all the technical setup so you
                could start staking your assets right away. We also help the
                Cosmos community by learning and building on the Cosmos SDK.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h3>Connect Us</h3>
              <p>
                Reach out to us if you have any questions or need help with
                delegation instructions.
              </p>
            </div>
            <div className='col-lg-6'>
              <div className='row justify-content-end mailbox'>
                <div className='col-lg-8'>
                  <a
                    href='mailto:support@tcnetwork.io'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button type='button' className='btn btn-primary btn-lg'>
                      Get in touch with us!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
