import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import WatchList from '../components/WatchList';
import { changeOrder, removeMovie } from '../actions/WatchListActions';

export default function WatchListContainer() {
  const data = useSelector(state => state.watchList);

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
    dispatch(removeMovie(movieId));
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <WatchList 
        data={data}
        removeFromWatchList={removeFromWatchList}
      />
    </DragDropContext>
  );
}