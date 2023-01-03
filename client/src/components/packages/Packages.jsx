import Card from '../card/Card';
import './Packages.css';
import { tour1Cover, tour2Cover, tour3Cover } from '../../assets';
import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';
const Packages = () => {
  const { tours } = useAppContext();

  // useEffect(() => {
  //   getTours();
  // }, []);

  return (
    <section className="section__packages">
      <header className="packages__header">
        <p className="subheading">popular packages</p>
        <h2 className="heading__secondary">checkout our packages</h2>
      </header>
      {tours?.map((tour) => (
        <Card key={tour._id} data={tour} img={tour1Cover} />
      ))}
    </section>
  );
};
export default Packages;
