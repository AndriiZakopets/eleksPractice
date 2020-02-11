import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import WatchListRow from '../components/WatchListRow';
import { Link } from 'react-router-dom';

export default function WatchList({ watchList, removeFromWatchList }) {
  return (
    <div>
      <Link 
        to="/catalog"
        style={{
          marginBottom: 20 + 'px',
          color: 'blue' 
        }}
      >
        catalog...
      </Link>
      <Droppable droppableId={'1'}>
      {provided => (
        <div 
          className="watch-list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1>
            WatchList
          </h1>
          {
            watchList.items.length > 0 ? 
              watchList.items.map((movieId, index) => (
                <WatchListRow 
                  removeFromWatchList={() => removeFromWatchList(index)}
                  key={movieId}
                  movie={watchList.itemsById[movieId]}
                  index={index}
                />
              )) : 
              'Watchlist is empty.'
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    </div>
  );
}