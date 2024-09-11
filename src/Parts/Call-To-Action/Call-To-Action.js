import { Link } from 'react-router-dom';
// Css
import './Call-To-Action.css';

function CallToAction() {
  return (
    <div className='call-to-action'>
      <div className='container'>
        <section>
          <h2 className='title-lg subline'>Building your future from A to Z</h2>
          <p className='content'>At ATZ SSS CORP, we specialize in delivering end-to-end water purification solutions, from initial design to final implementation. With a focus on innovation, quality, and sustainability, we ensure every project meets the highest standards, helping build a cleaner, safer future for communities.</p>
        </section>

        {/* <div>
          <Link to='/get-quote' className='btn btn-primary btn-lg'>get a free quote</Link>
          <p className='sub-btn'>Only takes a few seconds!</p>
        </div> */}
      </div>
    </div>
  );
}

export default CallToAction;