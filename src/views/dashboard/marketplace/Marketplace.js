import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/index.css';
import NFTCard from './components/NFTCard';
import SelectPrice from './components/SelectPrice';
import SelectExperience from './components/SelectExperience';
import SearchForKeyword from './components/SearchForKeyword';
import devices from '../../../utils/devices';

const coaches = [
  {
    id: 1,
    first_name: 'Jayne',
    last_name: 'Carmichael Norrie',
    email: 'jayne@musicisourforte.co.uk',
    password: '$2a$10$3LmQzlDtk/1NYys6kn5Ea.FH680/SzfqPWNTC3X9qZQ9.a.I1Z3vi',
    location: null,
    role_id: 2,
    user_id: 1,
    avatar_url: 'google.com',
    experience_level: 1,
    skill_level: 1,
    description:
      'Jayne worked as a singing teacher for 9 years and is now studying with Lambda School',
    rating: null,
    hourly_rate: null,
    contact_url: null,
  },
  {
    id: 2,
    first_name: 'Jayne',
    last_name: 'Carmichael Norrie',
    email: 'jayne@musicisourforte.co.uk',
    password: '$2a$10$3LmQzlDtk/1NYys6kn5Ea.FH680/SzfqPWNTC3X9qZQ9.a.I1Z3vi',
    location: null,
    role_id: 2,
    user_id: 1,
    avatar_url: 'google.com',
    experience_level: 1,
    skill_level: 1,
    description:
      'Jayne worked as a singing teacher for 9 years and is now studying with Lambda School',
    rating: null,
    hourly_rate: null,
    contact_url: null,
  },
];

const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .keyword {
      margin-top: 1rem;
    }

    @media ${devices.mobile} {
      flex-direction: column;
      align-items: center;
    }
  }

  .coaches {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 1rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em;

    .ant-pagination-item-active {
      border-color: #4fad65;
    }

    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }
  .loaderStyled {
    margin-top: 200px;
    margin-bottom: 200px;
  }
`;

const Marketplace = (props) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);

  const handlePagination = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };
  // if (loadingCoaches) {
  //   return (
  //     <StyledMarketplace className="marketplace-container">
  //       <div className="top">
  //         <Loader type="TailSpin" color="#2BAD60" height={80} width={80} />
  //       </div>
  //     </StyledMarketplace>
  //   );
  // }
  return (
    <StyledMarketplace className="marketplace-container">
      <div className="top">
        <SelectPrice searchForPrice={null} />
        <SearchForKeyword searchForKeyword={null} />
        <SelectExperience searchForExperience={null} />
      </div>
      <div className="coaches">
        {coaches.slice(minValue, maxValue).map((coach) => (
          <NFTCard
            key={coach.email}
            coach={coach}
            saveCoach={null}
            getFeedback={null}
            feedback={null}
            savePeer={() =>
              savePeer(
                {
                  email: coach.email,
                  name: `${coach.first_name} ${coach.last_name}`,
                  avatar_url: coach.avatar_url,
                },
                props,
              )
            }
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          onChange={handlePagination}
          total={coaches && coaches.length}
        />
      </div>
    </StyledMarketplace>
  );
};

export default Marketplace;
