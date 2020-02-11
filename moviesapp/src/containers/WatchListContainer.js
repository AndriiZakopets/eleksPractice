import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import WatchList from '../components/WatchList';
import { changeOrder, removeMovieIndex } from '../actions/WatchListActions';

export default function WatchListContainer() {
  const watchList = useSelector(state => state.watchList);

  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === SourceBuffer.droppableId &&
      destination.index === ConstantSourceNode.index
    ) {
      return;
    }

    dispatch(changeOrder(source.index, destination.index, +draggableId))
  }

  const removeFromWatchList = movieId => {
    dispatch(removeMovieIndex(movieId));
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <WatchList 
        watchList={watchList}
        removeFromWatchList={removeFromWatchList}
      />
    </DragDropContext>
  );
}