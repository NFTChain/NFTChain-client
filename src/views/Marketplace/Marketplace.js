import React, { useState, useEffect } from 'react';
import NFTCardList from './NFTCardList';
import Pagination from './Pagination';
import { Box } from '@material-ui/core';
// import { getFilesFromIPFS } from '../../utils/getFilesFromIPFS';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import { BEP721ContractString } from '../../utils/getContract';
// import { ethers } from 'ethers';

const Marketplace = ({ BEP721Contract, connectToContract }) => {
  const [NFTs, setNFTs] = useState([]);
  const [NFTPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    connectToContract(BEP721ContractString);
    // fetch NFTs from IPFS and modify the data how we need it

    if (BEP721Contract) {
      // const getBlockChainInfo = async () => {
      //   const totalAmountOfMintTokens = await BEP721Contract.totalSupply();
      //   console.log(totalAmountOfMintTokens);
      // };
      // getBlockChainInfo();
      // const fetchNfts = async () => {
      //   // connect to BEP721 contract to be able to get owner adress of NFT
      //   const getNFTs = await getFilesFromIPFS();
      //   const NFTInfoArray = [];
      //   getNFTs.rows.forEach(async (NFT, index) => {
      //     const hello = await BEP721Contract.ownerOf(NFT.ipfs_pin_hash);
      //     console.log(hello);
      //     const NFTInfoObject = {
      //       id: index,
      //       title: NFT.metadata.name,
      //       image: NFT.ipfs_pin_hash,
      //       description: NFT.metadata.keyvalues.description,
      //       subtitle: NFT.metadata.keyvalues.description, // use only description and title
      //       fileType: NFT.metadata.keyvalues.fileType,
      //       currentBid: 1000, // use NFTDex smart contract for
      //       owner: (await BEP721Contract.ownerOf(NFT.ipfs_pin_hash)).toString(),
      //       artist: (
      //         await BEP721Contract.ownerOf(NFT.ipfs_pin_hash)
      //       ).toString(), // we need to keep track of the artist!!! Add to metadata an artist field
      //     };
      //     NFTInfoArray.push(NFTInfoObject);
      //   });
      //   setNFTs(NFTInfoArray);
      // };
      // fetchNfts();
    }
    setNFTs([]);
  }, []);

  useEffect(() => {
    // only try to get smart contract info if BEP721 contract is available and got updated
    if (BEP721Contract) {
      const getBlockChainInfo = async () => {
        const BEP721InfoObject = {};

        // get first the number of created tokens out
        const totalAmountOfMintedTokens = Number(
          (await BEP721Contract.totalSupply()).toString(),
        );

        for (let i = 1; i <= totalAmountOfMintedTokens; i++) {
          const holderOfToken = (await BEP721Contract.ownerOf(i)).toString();
          const ipfsHash = (await BEP721Contract.tokenURI(i)).toString();
          BEP721InfoObject[ipfsHash] = holderOfToken;
          console.log('ROUND', i, holderOfToken, ipfsHash);
        }
      };
      getBlockChainInfo();
    }
  }, [BEP721Contract]);

  const indexOfLastNFT = currentPage * NFTPerPage;
  const indexOfFirstNFT = indexOfLastNFT - NFTPerPage;
  const currentNFTS = NFTs.slice(indexOfFirstNFT, indexOfLastNFT);

  return (
    <Box bgcolor='alternate.main' className='marketplace-container'>
      <Box bgcolor='alternate.main' className='marketplace'>
        <div className='marketplace-title'>
          <h1>Marketplace</h1>
        </div>
        <div className='card-list'>
          <NFTCardList NFTS={currentNFTS} />
        </div>
        <Pagination
          setCurrentPage={setCurrentPage}
          totalNFTS={NFTs.length}
          NFTPerPage={NFTPerPage}
          currentPage={currentPage}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
  };
};

export default connect(mapStateToProps, { connectToContract })(Marketplace);
