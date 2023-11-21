import travelImg from '../../assets/travel.svg';
import userImg from '../../assets/user.svg';

const Header = () => {
  const headerNav = ['Home', 'Offer', 'Cart'];

  return (
    <div className="header">
      <div className="container">
        <a href="#" className="logo">
          <img src={travelImg} alt="Travel" />
          Travel
        </a>
        <nav className="main-nav">
          <ul>
            {headerNav.map((nav, index) => {
              return (
                <li key={index}>
                  <a href="#">{nav}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="user">
          <img src={userImg} alt="" />
          My account
        </div>
      </div>
    </div>
  );
};

export default Header;
