import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import AuthenticationPage from '../Authentication/AuthenticationPage';
import { setSearchTerm, toggleOverlay, selectSearchTerm, selectIsOverlayVisible } from '../../store/slices/headerSlice';

const Header = ({ searchTerm, isOverlayVisible, setSearchTerm, toggleOverlay }) => {
  const location = useLocation();

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/search', {
        search: searchTerm,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <HeaderContainer>
      <BurgerDiv>
        <MenuIconWrapper>
          <MenuIconStyled style={fontB} />
        </MenuIconWrapper>
        <Link to="/">
          <Logo src="/images/CC_lgg.png" />
        </Link>
      </BurgerDiv>
      <SearchWrap>
        <SearchInput>
          <SIcon style={fontS} onClick={handleSearch} />
          <input
            placeholder="Search From Over 3000+ Parts, Accessories, Clothing & Featured Product "
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>
        <UserDetail>
          <UserImg src="https://i.pinimg.com/736x/05/1e/7c/051e7c9047e378dba942fb3eaf0f6992.jpg" />
          <UserName onClick={toggleOverlay}>Majaz Haque</UserName>
        </UserDetail>
        {isOverlayVisible && (
          <Overlay>
            <AuthenticationPage onClose={toggleOverlay} />
          </Overlay>
        )}
        <CartDetail>
          <Link to="/wishlist">
            {location.pathname === "/wishlist" ? (
              <FavoriteIcon style={fontS} />
            ) : (
              <FavoriteBorderIcon style={fontS} />
            )}
          </Link>
          <Link to="/carts">
            <CartDiv>
              <CartIcon style={fontS} />
              <sup>0</sup>
            </CartDiv>
          </Link>
        </CartDetail>
      </SearchWrap>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: selectSearchTerm(state),
  isOverlayVisible: selectIsOverlayVisible(state),
});

const mapDispatchToProps = {
  setSearchTerm,
  toggleOverlay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 64px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: 105px;
    padding: 0.5rem 1rem;
    flex-direction: column;
    align-items: start;

    /* Reset scrollbar styles for smaller screens if needed */
    .scroll-container::-webkit-scrollbar {
      width: auto;
    }
  }
`;


const BurgerDiv = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: start;
  margin-top: 0.2rem;
  a {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const MenuIconWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIconStyled = styled(MenuIcon)`
  margin-right: 1rem;
`;

const Logo = styled.img`
  width: 100%;
  height: 3rem;
  margin-bottom: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5px;
    height: 2.4rem;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const SearchInput = styled.div`
  width: 50vw;
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 1.5rem;

  input {
    width: 100%;
    height: 2.5rem;
    background: white;
    color: gray;
    border: 2px solid var(--border-color);
    border-radius: 6px;
    padding: 0 5px 0 2.5rem;
    text-align: start;
    font-size: 1.1rem;
    outline: none;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #0074e4;
    }
  }
  @media (max-width: 768px) {
    width: 95vw;
    input {
      height: 2.6rem;
    }
  }
`;

const UserDetail = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    position: static;
    display: none;
  }
`;

const UserImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.span`
  margin-left: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: none;
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const SIcon = styled(SearchIcon)`
  position: absolute;
  margin-left: 15px;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const CartDetail = styled.div`
  width: 10vw;
  max-width: 12vw;
  display: flex;
  align-items: center;
  margin-left: 3.5rem;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    width: 25vw;
    max-width: 30vw;
    justify-content: space-between;
    margin-top: -10vh;
    margin-left: -30vw;
  }
`;

const CartDiv = styled.div`
  display: flex;
  align-items: center;

  sup {
    margin-bottom: 20px;
    font-size: 18px;
  }

  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1000;
`;

const CartIcon = styled(ShoppingCartIcon)``;

const fontS = {
  fontSize: "30",
  cursor: "pointer",
};

const fontB = {
  fontSize: "40",
};
