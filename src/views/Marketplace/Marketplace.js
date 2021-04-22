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
        const getNFTs = (await getFilesFromIPFS()).rows;
        const NFTInfoArray = [];
        await Promise.all(
          getNFTs.map(async (NFT, index) => {
            let NFTInfo, NFTInfoObject, owner;
            try {
              NFTInfo = await BEP721Contract.inkInfoByInkUrl(NFT.ipfs_pin_hash);

              NFTInfoObject = {
                id: NFTInfo[0].toString(),
                artist: NFTInfo[1].toString(),
                count: NFTInfo[2].toString(),
                price: NFTInfo[3].toString(),
              };

              owner = await BEP721Contract.ownerOf(NFTInfoObject.id); // if promise resolves, we know token is minted and get the address of the holder
            } catch (error) {
              console.log(error);
              if (
                error.reason === 'ERC721: owner query for nonexistent token'
              ) {
                owner = NFT.metadata.keyvalues.artist; // if ownerOf promise rejects we know the NFT is unminted and the artist must be the owner
              }
            }
            if (NFTInfo && NFTInfoObject && Number(NFTInfoObject.price)) {
              // if NFTInfo is defined, the NFT (minted or unminted) exists, if price is set (higher than 0) we want to display the NFT on the marketplace
              NFTInfoArray.push({
                id: index,
                title: NFT.metadata.name,
                image: `https://ipfs.io/ipfs/${NFT.ipfs_pin_hash}`,
                description: NFT.metadata.keyvalues.description,
                fileType: NFT.metadata.keyvalues.fileType,
                price: NFTInfoObject.price,
                owner: owner,
                artist: NFT.metadata.keyvalues.artist,
              });
            }
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

  if (!currentNFTS.length) return <div>Here should be a nice loader ;(</div>;
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
