import { Input_Checkbox } from '../components/input'
import { TodoListStateContext } from '../todolist/TodoList'
import { buttonStyles } from '../components/Button'
import { theme } from '../helpers/themes'
import React, { useContext } from 'react'
import styled from 'styled-components'

type TaskProps = {
  key: string
  id: string
  name: string
  completed: boolean
}

export const Task = (props: TaskProps) => {
  const todoData = useContext(TodoListStateContext)

  const handleChecked = (id: string) =>
    todoData.setTasks(
      todoData.tasks.map(task => (id === task.id ? { ...task, completed: !task.completed } : task))
    )

  const handleDelete = (id: string) =>
    todoData.setTasks(todoData.tasks.filter(task => id !== task.id))

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

const Button_DeleteButton = styled.button`
  ${buttonStyles}
  position: absolute;
  width: ${theme.spacing.medium};
  height: ${theme.spacing.medium};
  top: 0;
  right: 0;
  opacity: 0;
`

const Div_TaskContainer = styled.div`
  background-color: ${theme.color.yellowBright};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1000px;
  border: ${theme.spacing.borderSmall} solid ${theme.color.blackBoxShadow};
  border-radius: 10px;
  margin: ${theme.spacing.small};
  &:hover ${Button_DeleteButton} {
    opacity: 1;
  }
  ${theme.mediaQueries.tablet} {
    width: 100%;
  }
`

const P_TodoBodyText = styled.p`
  font-size: ${theme.fontSize.small};
  padding: ${theme.spacing.small};
  word-break: break-all;
  width: 90%;
  ${theme.mediaQueries.tablet} {
    width: 85%;
  }
  ${theme.mediaQueries.phone} {
    width: 60%;
  }
  &[aria-checked='true'] {
    text-decoration: line-through;
  }
`
