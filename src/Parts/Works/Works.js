// Images
import Project01 from '../../Assets/Images/Project-01.jpg';
import Project02 from '../../Assets/Images/Project-02.jpg';
import Project03 from '../../Assets/Images/Project-03.jpg';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import ImgShadow from '../../Components/Img-Shadow/Img-Shadow';
import First from "../../Assets/NewImages/first.jpg"
import Second from "../../Assets/NewImages/second.jpg"
import Third from "../../Assets/NewImages/1202ab1496-water-purifier-manufacturers-3-7e65j.avif"
import Four from "../../Assets/NewImages/473e433205-water-purifier-manufacturers-2-myr23.avif"
import Five from "../../Assets/NewImages/b1df8aeb77-water-purifier-manufacturers-4-poaz0.avif"
import BtnHide from '../../Components/Btn-Hide/Btn-Hide';

// Fake Server
const data = [
  {
    id: 1,
    image: First,
    alt: 'Florida Heath Facility',
    link: '/project01',
    title: 'florida heath facility',
    categories: ['commercial']
  },

  {
    id: 2,
    image: Four,
    alt: 'Maine Modernity',
    link: '/project02',
    title: 'maine moderniti',
    categories: ['residential']
  },
  
  {
    id: 3,
    image: Third,
    alt: 'Exclusive Urban Living',
    link: '/project03',
    title: 'exclusion urben living',
    categories: ['commercial']
  }
];

function Works() {
  return (
    <div className='works'>
      <div className='container'>
        <HedSection
          title='explore recent work'
          content="At ATZ SSS CORP, we have successfully completed numerous government projects in water purification and infrastructure. Our recent works include high-capacity purification plants designed to meet the most stringent water quality standards, ensuring clean and sustainable water for communities. With over 20 years of expertise, we continue to deliver innovative and efficient solutions that make a lasting impact."
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,image,alt,link,title,categories} = item;
            
            return (
              <div key={id}>
                <ImgShadow
                  image={image}
                  alt={alt}
                  link={link}
                  title={title}
                  categories={categories}
                ></ImgShadow>
              </div>
            );
          })}
        </div>
        
        {/* <BtnHide link='/work' content='projects'></BtnHide> */}
      </div>
    </div>
  );
}

export default Works;