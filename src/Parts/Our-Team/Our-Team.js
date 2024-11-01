// Images
import AvadaTeam01 from '../../Assets/Images/Avada-Team-01.jpg';
import AvadaTeam02 from '../../Assets/Images/Avada-Team-02.jpg';
import AvadaTeam03 from '../../Assets/Images/Avada-Team-03.jpg';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import SocialMedia from '../../Components/Social-Media/Social-Media';
// Css
import './Our-Team.css';

// Fake Server
const data = [
  {
    id: 1,
    //image: "/6273888132516660123.jpg",
    alt: 'Atz SSS Team',
    name: 'Nikhil',
    job: 'Director',
    facebook: '',
    twitter: '',
    instagram: '',
    content: "At the core of every successful project is a strong foundation of trust, quality, and innovation. We build not just structures, but lasting relationships."
  },
  {
    id: 2,
    //image: "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
    alt: 'Avada Team',
    name: 'Ravi Chahar',
    job: 'CEO',
    facebook: '',
    twitter: '',
    instagram: '',
    content: "Construction is more than just building; it’s about bringing ideas to life and shaping communities through precision, dedication, and excellence."}
,
  {
    id: 3,
    //image: '/uncle.jpeg',
    alt: 'Avada Team',
    name: 'Ajmal ',
    job: 'Director',
    facebook: '',
    twitter: '',
    instagram: '',
    content: "Our vision is to create sustainable solutions that meet today’s needs while securing tomorrow’s resources. Every project is a step towards a better future."
  },
  
  ];

function OurTeam() {
  return (
    <div className='our-team parent-semicircular'>
      {/* semicircular */}
      <div className='semicircular'></div>

      <div className='container'>
        <HedSection
          title='meet our team'
          content='Our team at ATZ SSS CORP is made up of industry experts with decades of experience in water purification and infrastructure development. From engineers to project managers, each member is dedicated to delivering innovative, high-quality solutions tailored to your needs. Together, we are committed to building a better and sustainable future'
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,image,alt,name,job,facebook,twitter,instagram,content} = item;

            return (
              <section key={id} className='Person-Card'>
                <div className='parent-img'>
                  <img src={image} alt={alt} className='card-img'/>
                </div>

                <div className='card-content'>
                  <h3 className='title-md'>{name}</h3>
                  <h3 className='title-md'>{job}</h3>

                 

                  <p>{content}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
