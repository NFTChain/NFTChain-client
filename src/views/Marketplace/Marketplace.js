import React, { useState, useEffect } from 'react';
import Container from '../../common/Container';
import NFTCardList from './NFTCardList';
import Pagination from './Pagination';
import generateData from './fakeData';

const Marketplace = () => {
  const [NFTs, setNFTs] = useState([]);
  const [NFTPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNfts = () => {
      setNFTs(generateData());
    };
    fetchNfts();
  }, []);

  const indexOfLastNFT = currentPage * NFTPerPage;
  const indexOfFirstNFT = indexOfLastNFT - NFTPerPage;
  const currentNFTS = NFTs.slice(indexOfFirstNFT, indexOfLastNFT);

  return (
    <Container className='marketplace'>
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
    </Container>
  );
};

export default Marketplace;
