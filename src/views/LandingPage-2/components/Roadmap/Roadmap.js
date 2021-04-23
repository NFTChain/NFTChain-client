import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import roadmapData from './roadmapData';

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <h2 className='heading-secondary'>Our Roadmap</h2>
      <div className='container'>
        <VerticalTimeline>
          {roadmapData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.date}
              dateClassName='date'
              contentStyle={{ background: '#0B1224' }}
            >
              <h3 className='vertical-timeline-element-title'>{item.title}</h3>
              <ul className='roadmap__list'>
                {item.goals.map((goal, i) => (
                  <li key={i} className='roadmap__item'>
                    -{goal}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Roadmap;
