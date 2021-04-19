import React, { useState, useEffect } from 'react';
import NFTCardList from './NFTCardList';
import Pagination from './Pagination';
import { Box } from '@material-ui/core';
import { getFilesFromIPFS } from '../../utils/getFilesFromIPFS';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import { BEP721ContractString } from '../../utils/getContract';

const Marketplace = ({ BEP721Contract, connectToContract }) => {
  const [NFTs, setNFTs] = useState([]);
  const [NFTPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    connectToContract(BEP721ContractString);
  }, []);

  useEffect(() => {
    // only try to get smart contract info if BEP721 contract is available and got updated
    if (BEP721Contract) {
      // fetch NFTs from IPFS and modify the data how we need it
      const fetchNfts = async () => {
        // try to avoid as much as possible to get on-chain data and use off-chain data from IPFS
        const getNFTs = await getFilesFromIPFS();
        const NFTInfoArray = getNFTs.rows.map(
          (NFT) =>
            (NFT = {
              id: NFT.metadata.keyvalues.tokenId,
              title: NFT.metadata.name,
              image: `https://ipfs.io/ipfs/${NFT.ipfs_pin_hash}`,
              description: NFT.metadata.keyvalues.description,
              fileType: NFT.metadata.keyvalues.fileType,
              currentBid: 1000, // use NFTDex smart contract for
              owner: 'owner', // this will be a Promise => (await BEP721Contract.ownerOf(NFT.metadata.keyvalues.tokenId)).toString();
              artist: NFT.metadata.keyvalues.artist,
            }),
        );
        setNFTs(NFTInfoArray);
      };
      fetchNfts();
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
