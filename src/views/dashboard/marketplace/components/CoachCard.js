import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import CoachModal from './CoachModal';
import Rating from './Rating';
import { mapExperience } from '../../../../utils/mappers';
import devices from '../../../../utils/devices';

const StyledCoachCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 17rem;
  height: 24rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  text-align: left;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  .header {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-height: 5.5rem;
    .header-text {
      margin-left: 1rem;
      h3 {
        font-weight: bold;
        font-size: 1rem;
        color: #3c4043;
        margin: 0;
      }
      p {
        margin: 0;
      }
    }

    .header-photo {
      display: flex;
      justify-content: center;
      align-items: center;
      .picture {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .bullet-points p {
    margin: 0;
    .location-bullet .location-icon {
      margin-left: 0.1em;
      padding-right: 0.1em;
    }
  }

  .description p {
    margin: 0;
  }

  .reviews {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;

    p {
      margin-left: 0.7rem;
    }
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media ${devices.mobile} {
      flex-direction: column;
      align-items: center;
    }

    a {
      text-decoration: none;
      width: 100%;
    }

    .button {
      width: 6.7rem;
      @media ${devices.mobile} {
        width: 100%;
      }
    }

    .book-button {
      background-color: #4fad65;
      @media ${devices.mobile} {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const CoachCard = (props) => {
  const { coach, saveCoach, getFeedback, feedback, savePeer } = props;
  return (
    <StyledCoachCard className="coach-card">
      <div className="header">
        <div className="header-text">
          <h3>{`${coach.first_name} ${coach.last_name}`}</h3>
          <p>${coach.hourly_rate} per hour</p>
        </div>
        <div className="header-photo">
          <Avatar className="picture" alt="Coach" src={coach.avatar_url} />
        </div>
      </div>

      <div className="bullet-points">
        <p className="location-bullet">
          <i className="fas fa-map-marker-alt location-icon" />
          {'   '}
          {coach.location}
        </p>
        <p className="experience-bullet">
          <i className="fas fa-street-view experience-icon" />
          {'  '}
          {mapExperience(coach.experience_level)}
        </p>
      </div>
      <div className="description">
        <p>{`${coach.description && coach.description.slice(0, 90)}...`}</p>
      </div>

      <div className="reviews">
        <Rating rating={coach.rating} size="small" />
        <CoachModal
          coach={coach}
          getFeedback={getFeedback}
          feedback={feedback}
        />
      </div>

      <div className="footer">
        <Link to="/start_chat" onClick={savePeer}>
          <Button
            variant="contained"
            color="primary"
            className="chat-button button"
            endIcon={<TelegramIcon />}
          >
            Chat
          </Button>
        </Link>
        <Link to="/appointment" onClick={saveCoach}>
          <Button
            className="book-button button"
            variant="contained"
            color="primary"
            endIcon={<ShoppingCartIcon />}
          >
            Book
          </Button>
        </Link>
      </div>
    </StyledCoachCard>
  );
};

export default CoachCard;
