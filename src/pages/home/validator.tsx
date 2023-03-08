import React, { useEffect } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const item = (network: any, type: string) => {
  const explorerUrl = type === 'mainnet'
    ? 'https://explorer.tcnetwork.io'
    : 'https://testnet.explorer.tcnetwork.io';

  return (
    <div className='col-md-6 col-lg-6 col-xl-4'>
      <a href={network.explorerId ? `${explorerUrl}/${network.explorerId}` : ''} target='_blank' rel='noreferrer'>
        <div className={`card ${network.name.length > 8 ? 'pr-0' : ''}`}>

          <img style={{ marginRight: '10px' }} height={45} width={45} src={network.image} alt='' />

          <div className='card-body'>
            <div className='card-title'>
              {network.name}{' '}
              <span className='dot has-tooltip' data-original-title='null'>
                <svg
                  data-v-21c5d077
                  data-v-f322c9fc
                  width={10}
                  height={10}
                  viewBox='0 0 8 8'
                  fill='var(--dot-color, rgba(59, 66, 125, 0.12))'
                  xmlns='http://www.w3.org/2000/svg'
                  className={`status-${type}-${network.status}`}
                >
                  <circle data-v-21c5d077 cx={4} cy={4} r={4} />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: '12px', lineHeight: 'normal', color: '#6b7280' }}>
              {network.website}
            </div>
          </div>
        </div>
      </a >
    </div>
  )
}

export const Validator = ({ networks, type, archive }: { networks: any[], type: string, archive?: boolean }) => {
  return (
    <div className='row'>
      {networks
        .filter((x: any) => !archive
          ? x.type === type && x.status === 'active'
          : x.type === type)
        .sort((a: any, b: any) => a.name.localeCompare(b.name))
        .map((network: any) => item(network, type))
      }
    </div>
  )
}
