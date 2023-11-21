import Header from '../../components/Header/Header';
import '../../scss/styles.scss';
import TravelBlock from '../../components/TravelBlock/TravelBlock';
import Categories from '../../components/Categories/Categories';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <TravelBlock />
      </main>
    </>
  );
};

export default App;
