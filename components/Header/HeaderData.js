import logo from '../../assets/icons/Vector.svg';
import favorites from '../../assets/icons/favorite_24px.svg';
import searchHistory from '../../assets/icons/history_24px.svg';
import search from '../../assets/icons/search_24px.svg';

const linksDataArr = [
  {
    link: '/home',
    imgSrc: logo,
    text: 'ImageStock',
    key: 'logo',
  },
  {
    link: '/home',
    imgSrc: search,
    text: 'Поиск',
    key: 'home',
  },
  {
    link: '/favorites',
    imgSrc: favorites,
    text: 'Избранное',
    key: 'favorites',
  },
  {
    link: '/history',
    imgSrc: searchHistory,
    text: 'История поиска',
    key: 'history',
  },
];

export default linksDataArr;
