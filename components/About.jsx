// import PropTypes from 'prop-types';

const teamMembers = [
  {
    name: 'Paul Brown',
    imageSrc: './assets/paul.png',
    githubLink: 'https://github.com/0xQuasark',
    linkedinLink: 'https://www.linkedin.com/in/tallpaulbrown/',
    bio: [
      'Engineer -> Entrepreneur -> Engineer',
      'Passionate about frontier-tech. Wanting to be at the forefront of AI and crypto; they will redefine our lives in the next 10 years, and I want to be as close to ground zero as possible.',
    ],
  },
  {
    name: 'Samaad Turner',
    imageSrc: './assets/samaad.png',
    githubLink: 'https://github.com/SamaadTurner',
    linkedinLink: 'https://www.linkedin.com/in/samaad-turner/',
    bio: [
        'Recent graduate looking to get a job doing software engineering.',
        'Background in frontend/backend and mobile development with college and bootcamp experience.',
      ],
  },
  {
    name: 'Sydney Mae Pagalan',
    imageSrc: './assets/sydney.png',
    githubLink: 'https://github.com/sfpagalan',
    linkedinLink: 'https://www.linkedin.com/in/sfpagalan/',
    bio: [
      'Navy Vet & Medical Assistant - Software Developer', 
      'Worked at Kaiser Permanente as an MA and served 6 years in the US Navy.',
      'I am deeply passionate about the intersection of the medical field and technology, as well as my love for gaming.',
    ],
  },
];

function TeamMemberCard({ member }) {
  return (
    <div className="about-card">
      <img src={member.imageSrc} className="about-pic" alt={member.name} />
      <p
        style={{
          fontWeight: 'bold', 
          fontSize: '30px', 
          fontFamily: 'Jomhuria',
          margin: '0' 
        }}>{member.name}</p>
      {member.bio && (
        <ul 
          style={{
            width: '350px',
            fontSize: '15px', 
            fontFamily: 'Lumanosimo',
            // listStyle: 'none',
          }}
        >
          {member.bio.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      )}
      <div>
        <a 
          href={member.githubLink} 
          className='links'
            target="_blank" 
            rel="noopener noreferrer">
          GitHub |
        </a>
        <a 
          href={member.linkedinLink} 
          className='links'
            target="_blank" 
            rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

// TeamMemberCard.propTypes = {
//   member: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     imageSrc: PropTypes.string.isRequired,
//     githubLink: PropTypes.string.isRequired,
//     linkedinLink: PropTypes.string.isRequired,
//     bio: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };

function About() {
  return (
    <div>
      <header>
        <h1 className="team-title">The Team</h1>
      </header>
      <div id="team">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

export default About;
