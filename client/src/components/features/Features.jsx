import './Features.css';
import Feature from '../feature/Feature';
import { guide, memories, savings, world } from '../../assets';

const features = [
  {
    id: 1,
    title: 'Expert Guides',
    img: guide,
    text: 'Our tour guides are experts in the industry with vast amounts of experience',
  },
  {
    id: 2,
    title: 'Exciting Locations',
    img: world,
    text: 'We explore the unexplored corners of the world, whick makes our tours very thrilling and adventourous. ',
  },
  {
    id: 3,
    title: 'Lifelong Memories',
    img: memories,
    text: 'We believe that adventures are meant for creating memories and we make sure those are memorable.',
  },
  {
    id: 4,
    title: 'Affordable prices',
    img: savings,
    text: 'What good is an adventure that breaks your bank, worry not our tours are quite affordable.',
  },
];

const Features = () => {
  return (
    <section className="section__features">
      <div className="feature__box">
        {features.map((feature) => (
          <Feature
            key={feature?.id}
            img={feature?.img}
            title={feature?.title}
            text={feature?.text}
          />
        ))}
      </div>
    </section>
  );
};
export default Features;
