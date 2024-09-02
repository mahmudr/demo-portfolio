import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: 'Node.js', percentage: 85 },
  { name: 'Express.js', percentage: 85 },
  { name: 'PostgreSQL', percentage: 85 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 95 },
  { name: 'Web Development', percentage: 95 },
  { name: 'Brand Identity', percentage: 80 },
  { name: 'Logo Design', percentage: 90 },
  // Add more skills here
];

const SkillsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Skills</h2>
      <p style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text.
      </p>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.circle}>
              <div style={{ ...styles.progress, ...{ strokeDasharray: `${skill.percentage}, 100` } }}>
                <span style={styles.percentage}>{skill.percentage}%</span>
              </div>
            </div>
            <h3 style={styles.skillName}>{skill.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as 'center',
    backgroundColor: '#141414',
    color: '#fff',
    padding: '2rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '2rem',
  },
  card: {
    padding: '1rem',
    textAlign: 'center' as 'center',
  },
  circle: {
    position: 'relative' as 'relative',
    width: '150px',
    height: '150px',
    margin: '0 auto 1rem',
    borderRadius: '50%',
    backgroundColor: '#222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    position: 'absolute' as 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'conic-gradient(#6a0dad 0%, #6a0dad 0%, #ccc 100%)',
  },
  percentage: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as 'bold',
    color: '#fff',
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: 'bold' as 'bold',
  },
};

export default SkillsCarousel;
