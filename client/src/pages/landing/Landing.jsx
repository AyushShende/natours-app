import {
  Cta,
  Features,
  Footer,
  Gallery,
  Hero,
  Packages,
  Navbar,
} from '../../components';
import { landing } from '../../assets';
import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';

const Landing = () => {
  const { getTours } = useAppContext();

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div>
      <Navbar variant="transparent" />
      <Hero img={landing} />
      <Features />
      <Packages />
      <Gallery />
      <Cta />
      <Footer />
    </div>
  );
};
export default Landing;
