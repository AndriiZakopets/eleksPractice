import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export default function Column({ column, tasks }) {
  return (
    <div style={{
      margin: `8px`,
      border: `1px solid lightgrey`,
      borderRadius: `2px`
    }}>
      <h3 style={{
        padding: `8px`
      }}>
        {column.title}
      </h3>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div 
            style={{
              padding: `8px`
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable
                index={index}
                draggableId={task.id}
              >
                {provided => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
                      style={{
                        border: `1px solid lightgrey`,
                        borderRadius: `2px`,
                        padding: `8px`,
                        paddingBottom: `16px`
                      }}
                    >
                      {task.content}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}