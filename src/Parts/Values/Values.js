// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Values.css';

// Fake Server
const data = [
  {
    id: 1,
    icon: 'icon-home',
    title: 'Commitment to Quality',
    content: "We deliver projects that meet the highest standards of quality and safety, ensuring long-term success and environmental sustainability"},
    
  {
    id: 2,
    icon: 'icon-setting',
    title: 'Integrity in Every Project',
    content: "We uphold honesty, transparency, and accountability in all our dealings, ensuring trust and reliability for our clients."
  },
    
  {
    id: 3,
    icon: 'icon-users',
    title: 'Innovative Problem-Solving',
    content: "We embrace creativity and advanced technologies to provide tailored solutions that meet the unique demands of each project."
  },
  
  {
    id: 4,
    icon: 'icon-bulb',
    title: 'Client-Centric Approach',
    content:"We prioritize our clients' needs, ensuring personalized service and close collaboration to achieve their goals effectively."
  },
];

function Values() {
  return (
    <div className='values'>
      <div className='container'>
        <HedSection
          title='our core values'
          content="Our core values are built on a foundation of integrity, quality, innovation, and client focus. We are committed to delivering exceptional water purification solutions that not only meet industry standards but also exceed client expectations through personalized service and innovative problem-solving."
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,icon,title,content} = item;

            return (
              <section key={id} className='loop-card'>
                <div className='parent-icon'>
                  <i className={`loop-icon ${icon}`}></i>
                  <h3 className='title-sm subline'>{title}</h3>
                </div>
                
                <p>{content}</p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;