import React from 'react';
import { Link } from  'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

export default function WatchListRow({ index, movie, removeFromWatchList }) {
  return (
    <Draggable
      index={index}
      draggableId={`${movie.id}`}
    >
      {provided => (
        <div  
          className="watch-list-item-container"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="watch-list-item">
            <Link to={`/catalog/${movie.id}`}>
              {movie.title}
            </Link>
            <div onClick={removeFromWatchList} className="link">x</div>
          </div>
        </div>
      )}
    </Draggable>
  );
}