import { Link } from 'react-router-dom';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import { GiWaterDrop } from "react-icons/gi";
import { FcSupport } from "react-icons/fc";
import { AiOutlineSolution } from "react-icons/ai";
import { RiGovernmentLine } from "react-icons/ri";
// Css
import './Construction.css';

// Data for ATZ SSS CORP
const data = [
  { 
    id: 1,
    frontIcon: <GiWaterDrop />, // Using water drop icon
    frontTitle: 'Water Purification',
    frontContent: 'Expert solutions in building efficient water purification plants with capacities ranging from 5000 GPH to 10000 GPH.',
    backTitle: 'Clean & Sustainable',
    backContent:'Providing advanced water purification technology to ensure long-lasting, environmentally friendly solutions.'
  },
  
  {
    id: 2,
    frontIcon: <FcSupport />, // Using support icon
    frontTitle: 'Maintenance & Support',
    frontContent: 'Ensuring continuous operation with comprehensive maintenance and technical support for all projects.',
    backTitle: 'Continuous Excellence',
    backContent: 'Our dedicated team provides consistent support and maintenance, keeping your systems running smoothly.'
  },
  
  {
    id: 3,
    frontIcon: <AiOutlineSolution />, // Using solution icon
    frontTitle: 'Innovative Solutions',
    frontContent: 'Utilizing cutting-edge technology to create innovative water treatment solutions for complex challenges.',
    backTitle: 'Tailored Solutions',
    backContent: 'Every project is designed with customized approaches, ensuring the perfect fit for your specific needs.'
  },
  
  {
    id: 4,
    frontIcon: <RiGovernmentLine />, // Using government icon
    frontTitle: 'Government Contracts',
    frontContent: 'Over 20 years of experience delivering top-notch solutions for government projects in water purification.',
    backTitle: 'Trusted Partnerships',
    backContent: 'We work closely with government entities, ensuring reliable and sustainable infrastructure for communities.'
  },
];

function Construction() {
  return (
    <div className='construction'>
      <div className='container'>
        <HedSection
          title='Leaders in Water Purification and Infrastructure'
          content='With over 20 years of expertise, ATZ SSS CORP delivers high-quality water purification solutions for government and private projects. Our commitment to innovation, sustainability, and client satisfaction sets us apart.'
        />

        <div className='parent-items'>
          {data.map(item=>{
            const {id,frontIcon,frontTitle,frontContent,backTitle,backContent} = item;

            return (
              <div key={id} className='card-parent'>
                <div className='rotatory-card'>
                  <section className='card-front'>
                    <div className='card-front-icon'>
                      {frontIcon} {/* Render the React Icon here */}
                    </div>
                    <h3 className='title-md'>{frontTitle}</h3>
                    <p>{frontContent}</p>
                  </section>

                  <section className='card-back'>
                    <h4 className='title-sm'>{backTitle}</h4>
                    <p>{backContent}</p>
                    {/* <Link to='/get-quote' className='btn btn-secondary'>Get a Quote</Link> */}
                  </section>
                </div>
              </div>
            );
          })}  
        </div>
      </div>
    </div>
  );
}

export default Construction;
