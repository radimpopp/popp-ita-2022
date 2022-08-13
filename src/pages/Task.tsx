import { Button_DeleteButton, Div_TaskContainer, TodoListStateContext } from '../pages/TodoList'
import { Input_Checkbox } from '../components/input'
import { P_TodoBodyText } from '../components/BodyText'
import React, { useContext } from 'react'

type TaskProps = {
  key: string
  id: string
  name: string
  completed: boolean
}

export const Task = (props: TaskProps) => {
  const { tasks, setTasks } = useContext(TodoListStateContext)

  const handleChecked = (id: string) =>
    setTasks(tasks.map(task => (id === task.id ? { ...task, completed: !task.completed } : task)))

  const handleDelete = (id: string) => setTasks(tasks.filter(task => id !== task.id))

  return (
    <Div_TaskContainer key={props.id}>
      <Button_DeleteButton onClick={() => handleDelete(props.id)}>
        <P_TodoBodyText>X</P_TodoBodyText>
      </Button_DeleteButton>
      <Input_Checkbox
        type='checkbox'
        checked={props.completed}
        onChange={() => handleChecked(props.id)}
      />
      <P_TodoBodyText aria-checked={props.completed}>{props.name}</P_TodoBodyText>
    </Div_TaskContainer>
  )
}
