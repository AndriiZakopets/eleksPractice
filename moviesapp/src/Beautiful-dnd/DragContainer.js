import React, { useState } from 'react';
import initialData from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

export default function DragContainer() {
  const [data, setData] = useState(initialData);

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

    const column = data.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    const temp = newTaskIds[source.index];
    newTaskIds[source.index] = newTaskIds[destination.index];
    newTaskIds[destination.index] = temp;

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    }
    setData(newData);
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {
      data.columnOrder.map(columnId => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })
    }
    </DragDropContext>
  );
}