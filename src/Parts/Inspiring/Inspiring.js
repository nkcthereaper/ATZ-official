// Images
import Materials from '../../Assets/Images/Materials.webp';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Inspiring.css';

function Inspiring() {
  return (
    <div className='inspiring'>
      <div className='container'>
        <HedSection
          title='Building your future from A to Z'
          content='At ATZ SSS CORP, we specialize in delivering end-to-end water purification solutions, from initial design to final implementation. With a focus on innovation, quality, and sustainability, we ensure every project meets the highest standards, helping build a cleaner, safer future for communities.'
        />

        <img src={Materials} alt='Construction Materials' className='inspiring-img'/>
      </div>
    </div>
  );
}

export default Inspiring;