import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import 'react-vertical-timeline-component/style.min.css';
import roadmapData from './roadmapData';

const Roadmap = () => {
  const iconStyles = { background: '#4d1037' };
  return (
    <div className='roadmap'>
      <h2 className='heading-secondary'>Our Roadmap</h2>
      <div className='container roadmap__content'>
        <VerticalTimeline>
          {roadmapData.map((item) => {
            let rightIcon = item.icon == 'right';

            return (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                dateClassName='date'
                contentStyle={{ background: '#0B1224' }}
                iconStyle={iconStyles}
                icon={
                  rightIcon ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />
                }
              >
                <h3 className='vertical-timeline-element-title roadmap__title'>
                  {item.title}
                </h3>
                <ul className='roadmap__list'>
                  {item.goals.map((goal, i) => (
                    <li key={i} className='roadmap__item'>
                      - {goal}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Roadmap;
