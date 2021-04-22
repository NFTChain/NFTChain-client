import React from 'react';
import { AiOutlineTransaction } from 'react-icons/ai';
import { GiFactoryArm, GiPencilBrush, GiChaingun } from 'react-icons/gi';
import { SiSmartthings } from 'react-icons/si';
import { FaHandHoldingUsd } from 'react-icons/fa';

export default [
  {
    title: 'Low Transaction Fees',
    body:
      'We are utilizing Binance Smart Chain to provide our users low transaction fees',
    icon: <AiOutlineTransaction />,
  },
  {
    title: 'Buyer Mints NFT',
    body:
      'To lower the transaction fees for artists, we are using a technique where the buyer can mint their token',
    icon: <GiPencilBrush />,
  },
  {
    title: 'NFT Factory',
    body:
      'To provide our users with non-stop NFT availability we created an NFT creation tool where artists can paint their own NFTs',
    icon: <GiFactoryArm />,
  },
  {
    title: 'Diversity',
    body:
      'Our marketplace will support every kind of NFT. Every content creator can create images, songs, 3D assets and videos',
    icon: <SiSmartthings />,
  },
  {
    title: 'Staking',
    body:
      'In the future NFTC will support various staking pools to increase the value of holding our main currency',
    icon: <FaHandHoldingUsd />,
  },
  {
    title: 'Blockchain Bridges',
    body:
      'NFTC will support multiple Blockchain bridges which enable users to switch their coins to their favorite Blockchain',
    icon: <GiChaingun />,
  },
];
