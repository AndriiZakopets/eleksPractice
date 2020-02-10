import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import WatchListRow from '../components/WatchListRow';
import { Link } from 'react-router-dom';

export default function WatchList({ data, removeFromWatchList }) {
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
          {data.watchList.map((movieId, index) => (
            <WatchListRow 
              removeFromWatchList={() => removeFromWatchList(index)}
              key={movieId}
              movie={data.watchIds[movieId]}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    </div>
  );
}