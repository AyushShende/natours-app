import './Gallery.css';
import { tourist1, tourist2, tourist3, tourist4, tourist5 } from '../../assets';

const Gallery = () => {
  return (
    <section className="section__gallery">
      <header className="packages__header">
        <p className="subheading">photo gallery</p>
        <h2 className="heading__secondary">Photos from travellers</h2>
        <p className="gallery__text">
          Here are some glimpses of our travellers that will put a smile on your
          face.
        </p>
      </header>
      <div className="photos">
        <div className="gallery__img__box">
          <img className="img" src={tourist1} alt="" />
        </div>
        <div className="gallery__img__box item2">
          <img className="img" src={tourist4} alt="" />
        </div>
        <div className="gallery__img__box">
          <img className="img" src={tourist2} alt="" />
        </div>
        <div className="gallery__img__box">
          <img className="img" src={tourist3} alt="" />
        </div>

        <div className="gallery__img__box">
          <img className="img" src={tourist5} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Gallery;
