import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
import AirdropIcon from '../../assets/icons/delegation.svg';
import ExplorerIcon from '../../assets/icons/explorer.png';
import AodaiIcon from '../../assets/icons/aodai.jpeg';
import TrackingIcon from '../../assets/icons/tracking.png';
import ValidatorStatusIcon from '../../assets/icons/validator-status.png';

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

      <Element name='scroll-nft' />
      <section id='intro' className='pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <h3>NFT Creator</h3>
              <h4>Art maker from Cosmos</h4>
              <p style={{ marginBottom: '4px', maxWidth: '100%' }}>
                With applying AI technology, TC Network is launching the amazingly honest and quality NFT collections.
              </p>
              <p style={{ marginBottom: '4px', marginTop: '20px', maxWidth: '100%' }}>
                Each collection is designed to bring traditional cultural values ​​to the community,
                help people have more interesting cultural experiences in a lively and impressive way.
              </p>
              <p style={{ marginTop: '20px', maxWidth: '100%' }}>
                These collections give the holders and delegators the benefits and privileges in the TC Network's activities,
                including staking and gaming.
              </p>
              <h4>Ao Dai Collection</h4>
              <p style={{ marginBottom: '8px', maxWidth: '100%' }}>
                <span style={{ color: '#f87907', fontWeight: 'bold' }}>Whitelist Sale:</span> 23/05/2023 11:00:00 -  24/05/2023 11:00:00 (UTC)
              </p>
              <p style={{ marginTop: '8px', maxWidth: '100%' }}>
                <span style={{ color: '#f87907', fontWeight: 'bold' }}>Public Sale:</span> 11:00 25/05/2023 - 11:00 29/05/2023 (UTC)
              </p>
            </div>

            <div className='col-lg-4 pt-4' >
              <img src={AodaiIcon} style={{ padding: '3px', backgroundColor: '#e5e7eb', width: '368px' }} />
            </div>
          </div>
          <a className='btn btn-primary btn-lg' href="https://beta.seekhype.ai/launchpad" target="_blank">
            Minting
          </a>
        </div>
      </section>

      <Element name='scroll-staking' />
      <section id='staking'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-6 order-2 order-lg-0'>
              <img src={ExplorerIcon} style={{ padding: '3px', backgroundColor: '#e5e7eb', width: '500px' }}
                className='d-inline-block align-top' />
            </div>
            <div className='col-lg-6 order-0 order-lg-2'>
              <h3>The Internet of Blockchains Staking Service</h3>
              <p style={{ marginBottom: '8px' }}>
                Cosmos is an ever-expanding ecosystem of interoperable
                and sovereign blockchain apps and services, built for a
                decentralized future.
              </p>
              <p style={{ marginBottom: '8px' }}>
                TC Network is a group of technical developers
                participating in #Cosmos blockchains, providing staking services,
                building dApps and supporting Cosmos projects.
              </p>
              <p style={{ marginBottom: '8px' }}>
                TC Network Validator helps investors increase their crypto investments with low commission, auto compound rewards service.
                Holders and delegators are also able to receive NFT freely from our community NFT collections.
              </p>
              <p className='pt-4' style={{ alignItems: 'right' }}>
                <a href='https://explorer.tcnetwork.io' rel='noreferrer' className='btn btn-primary btn-lg'>Staking With Us</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Element name='scroll-bot' />
      <section id='intro'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8 order-0'>
              <h3>Cosmos Tracking Service</h3>
              <h4>Tracking Bot</h4>
              <p style={{ maxWidth: '100%', marginBottom: '8px' }}>
                Tracking Bot is a tool which running on Cosmos-based blockchains
                and helps subscribed users to get been alerted on their registered type of information
                such as specific wallets, new created proposals and so on.
              </p>
              <p>
                <a href='https://tracking.tcnetwork.io' rel='noreferrer' className='btn btn-primary btn-lg'>Register Alert</a>
              </p>
            </div>

            <div className='col-lg-4 order-2'>
              <img src={TrackingIcon} style={{ width: '300px' }}
                className='d-inline-block align-top' />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4 order-0'>
              <img src={ValidatorStatusIcon} style={{ padding: '3px', backgroundColor: '#e5e7eb', width: '300px' }} className='d-inline-block align-top' />
            </div>

            <div className='col-lg-8 order-2'>
              <h4>Discord Validator Status Bot</h4>
              <p style={{ maxWidth: '100%', marginBottom: '8px' }}>
                Discord Validator Status Bot is used for the `health of validator` checking of a blockchain.
              </p>
              <p style={{ maxWidth: '100%' }}>
                It's executed as a service that uses the Rest/Rpc(s) registered on-chain directly,
                checkings all validators and their status. When a node goes inactive/active, or missing a number of blocks, or signing block again...
                The bot sends messages of the corresponding status to the Discord channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Element name='scroll-validator' />
      <section id='portfolio'>
        <div className='container'>
          <h3>Portfolio | Joined as the Validator!</h3>
          {networks && networks.length && <Validator networks={networks} type='mainnet' />}

          {/* <h4>Joined Testnet</h4> */}
          <div className='testnet'>Testnet</div>
          {networks && networks.length && <Validator networks={networks} type='testnet' />}

          {/* <div className='row d-flex align-items-center' style={{ marginTop: '10px' }}>
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
          </div> */}
        </div>
      </section>

      <Element name='scroll-airdrop' />
      <section id='intro'>
        <div className='container pt-0'>
          <div className='row'>
            <div className='col-lg-6'>
              <h3>Cosmos Airdrops</h3>
              <h4>Airdrop Collector for cosmos ecosystem.</h4>
              <p style={{ marginBottom: '8px' }}>
                Cosmos stakers and delegators have a huge apportunity can get the airdrop from the potential projects.
              </p>
              <p style={{ marginBottom: '8px' }}>
                With the huge amount of current and upcoming airdrops on the
                cosmos ecosystem it can be impossible to keep up with all the
                emerging information.
              </p>
              <p style={{ marginBottom: '8px' }}>
                Here you will find a compiled list of all currently claimable, upcoming, rumoured, and expired airdrops.
                Not only from app chains, but also from the list of dApp of special network.
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
      </section>

      <Element name='scroll-about' />
      <section id='about'>
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
