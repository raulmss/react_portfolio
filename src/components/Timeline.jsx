import React from 'react';
import '../css/Timeline.css'; // Import the updated minimalist styling

const Timeline = () => {
  const experiences = [
    {
      role: 'Software Developer Engineer in Test Intern',
      company: 'Rocket Lawyer, CA, USA',
      date: '06/2024 – current',
      details: [
        'Finished a 10-week backlog in 4 weeks, increased test coverage by 30%, and improved platform reliability for 30M users'
      ]
    },
    {
      role: 'Masters in Computer Science',
      company: 'Full-time study',
      date: '06/2023 – 06/2024',
      details: ['Focused exclusively on completing my master’s degree.']
    },
    {
      role: 'Java Software Developer',
      company: 'ESIG GROUP, Brazil',
      date: '03/2022 – 06/2023',
      details: [
        'Created a troubleshooting guide reducing onboarding by 50%, ranked in top 10 developers, and maintained SIPAC/SIGAA systems.'
      ]
    }
  ];

return (
    <div className="timeline" id="experiences">
        <h4>Experiences</h4>
        {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                    <h5>{exp.role}</h5>
                    <h6>{exp.company}</h6>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {exp.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
                <div className="timeline-date">
                    <span>{exp.date}</span>
                </div>
            </div>
        ))}
    </div>
);
};

export default Timeline;
