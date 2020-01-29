import React, { useEffect, useState } from 'react';
import API from '../API'
import Filters from './Filters'
import ListItem from './ListItem';

// const TRENDING = 'trending';
// const POPULAR = 'popular';
// const TOP = 'top';

// const REQUEST_MAP = {
//   [TRENDING]: API.getTrending,
//   [POPULAR]: API.getPopular,
//   [TOP]: API.getTopRated
// }

// function Catalog(props) {
//   const [tempSearchQuery, setTempSearchQuery] = useState('');
//   const [data, setData] = useState([]);
//   const [settings, setSettings] = useState({
//     sorting: localStorage.getItem('sorting') || 'trending',
//     page: localStorage.getItem('page') || 1,
//     searchQuery: ''
//   });

//   useEffect((_prevProps, _prevState) => {
//     localStorage.setItem('page', settings.page);
//     fetchData();
//   }, [settings]);

//   const changeData =  ({ results }) => setData(results);

//   const fetchData = () => {
//     const { searchQuery, sorting, page } = settings;

//     if (searchQuery) {
//       API.getMovieByQuery(page, searchQuery).then(changeData);
//     } else {
//       const requestFunc = REQUEST_MAP[sorting];

//       if (requestFunc) {
//         requestFunc(page).then(changeData);
//       }
//     }
//   }

//   const changeSettings = (update = {}) => {
//     setSettings(prevState => ({
//       ...prevState,
//       page: 1,
//       ...update
//     }));
//   }

//   const onChange = searchQuery => {
//     changeSettings({ searchQuery });
//   };

//   const onChangeDebounced = debounce(onChange, 400);

//   const onTextChange = e => {
//     setTempSearchQuery(e.target.value);
//     onChangeDebounced(e.target.value);
//   }

//   const onSelectChange = e => {
//     localStorage.setItem('sorting', e.target.value);
//     changeSettings({ sorting: e.target.value })
//   }

//   return (
//     <div className="Catalog">
//       <div className="filters">
//         <TextField
//           label="Search"
//           value={tempSearchQuery}
//           onChange={onTextChange}
//         />
//         <Select
//           disabled={!!settings.searchQuery}
//           onChange={onSelectChange}
//           value={settings.sorting}
//         >
//           <MenuItem value="trending">
//             trending
//           </MenuItem>
//           <MenuItem value="popular">
//             popular
//           </MenuItem>
//           <MenuItem value="top">
//             top
//           </MenuItem>
//         </Select>
//       </div>
//       <div className="list">
//         {
//           data.map(movie => (
//             <ListItem
//               movie={movie}
//               key={movie.id}
//               history={props.history}
//             />
//           ))
//         }
//       </div>
//     </div>
//   );
// }

const TRENDING = 'trending';
const POPULAR = 'popular';
const TOP = 'top';

const REQUEST_MAP = {
  [TRENDING]: API.getTrending,
  [POPULAR]: API.getPopular,
  [TOP]: API.getTopRated
}

function Catalog(props) {;
  const [data, setData] = useState([]);
  const [settings, setSettings] = useState({
    sorting: localStorage.getItem('sorting') || 'trending',
    page: localStorage.getItem('page') || 1,
    searchQuery: ''
  });

  const changeSettings = (newSettings = {}) => {
    console.log(newSettings.searchQuery);
    setSettings(prevSettings => ({
      ...prevSettings,
      page: 1,
      ...newSettings
    }));
  }

  useEffect(() => {
    localStorage.setItem('page', settings.page);
    fetchData();
  }, [settings]);

  const changeData =  ({ results }) => setData(results);

  const fetchData = () => {
    const { searchQuery, sorting, page } = settings;

    if (searchQuery) {
      API.getMovieByQuery(page, searchQuery).then(changeData);
    } else {
      const requestFunc = REQUEST_MAP[sorting];

      if (requestFunc) {
        requestFunc(page).then(changeData);
      }
    }
  }

  return (
    <div className="Catalog">
      <Filters 
        settings={settings} 
        changeSettings={changeSettings}
      />
      <div className="list">
        {
          data.map(movie => (
            <ListItem
              movie={movie}
              key={movie.id}
              history={props.history}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Catalog;
