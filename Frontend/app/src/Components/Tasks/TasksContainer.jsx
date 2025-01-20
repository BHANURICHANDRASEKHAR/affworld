import React, { useState,useContext, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import NoData from './NoData';
import {Get_Tasks,Update_Tasks} from './SubmitTask'
import { UserContext } from '../Context/Context';
import Loader from '../Buttons/Loader';
import DeleteTask from '../Buttons/DeleteTask';
export default function TasksContainer() {
 const [Loading,SetLoading]=useState(false);
 const {user,tasks, setTasks} =useContext(UserContext)
   useEffect(()=>{
    Get_Tasks(SetLoading,setTasks,user)
   },[user])
  
  const columns = {
    Pending: tasks.filter((task) => task.status === 'Pending'),
    Completed: tasks.filter((task) => task.status === 'Completed'),
    Done: tasks.filter((task) => task.status === 'Done'),
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) return;
    
    if (source.droppableId !== destination.droppableId) {
      Update_Tasks(user,tasks[source.index],destination.droppableId)
      const sourceTasks = [...columns[source.droppableId]];
      const destinationTasks = [...columns[destination.droppableId]];
      const [removed] = sourceTasks.splice(source.index, 1);
      removed.status = destination.droppableId;
      destinationTasks.splice(destination.index, 0, removed);

      setTasks([
        ...tasks.filter(
          (task) =>
            task.status !== source.droppableId &&
            task.status !== destination.droppableId
        ),
        ...sourceTasks,
        ...destinationTasks,
      ]);
    }
  };
  if(Loading)
  {
    return <Loader />
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mt-4">
        <div className="row">
          {Object.keys(columns).map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  className="col-md-4  border border-3"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3 className="text-center fw-bold">{status}</h3>
                  {columns[status].length > 0 ? (
                    columns[status].map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="m-1 p-3 border rounded bg-light row"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >            
                            <div className='col-10'><h5>{task.TaskName}</h5>
                            <p>Description: {task.Description}</p></div>
                            <DeleteTask index={index}/>
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <NoData status={status} />
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}
