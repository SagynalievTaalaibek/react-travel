import TravelItem from './TravelItem';
import { useEffect, useState } from 'react';
import { Travel } from '../../types';
import Skeleton from './Skeleton';

const TravelBlock = () => {
  const MOCK_API = 'https://655459cb63cafc694fe65bca.mockapi.io/travels';
  const [travels, setTravels] = useState<Travel[]>([]);
  const [travelCount, setTravelCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(MOCK_API);

      if (response.ok) {
        const travels: Travel[] = await response.json();
        setTravels(travels);
        setIsLoading(false);
      }
    };

    void fetchData();
  }, []);

  const countTravel = () => {
    setTravelCount((prevState) => prevState + 1);
  };

  const travelsList = travels.map((travel: Travel) => {
    return <TravelItem {...travel} key={travel.id} book={countTravel} />;
  });

  const onClickNewTravel = () => {
    setTravels((prevState) => {
      const lastElement = prevState[prevState.length - 1];
      const id = lastElement ? lastElement.id + 1 : 1;
      return [
        ...prevState,
        {
          id,
          name: 'Каньон Сказка',
          region: 1,
          description:
            'Небольшое ущелье на южном берегу Иссык-Куля, знаменитое своими красными глиняными скалами',
          price: 100,
          img: 'https://st-1.akipress.org/127/.storage/limon2/images/july2016/f87bf38f5ea0f5f7c686d13d5e2be7c9.jpg',
        },
      ];
    });
  };

  return (
    <div className="container">
      <button onClick={onClickNewTravel}>Add test</button>
      <span style={{ marginLeft: '10px' }}>{travelCount}</span>
      <div className="travel-block">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : travelsList}
      </div>
    </div>
  );
};

export default TravelBlock;
