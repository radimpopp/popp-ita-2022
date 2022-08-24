import { Input_Checkbox } from '../components/input'
import { Task } from '../todolist/TodoList'
import { TodoListStateContext } from '../todolist/TodoList'
import { buttonStyles } from '../components/Button'
import { theme } from '../helpers/themes'
import React, { useContext } from 'react'
import styled from 'styled-components'

type Props = {
  task: Task
}

export const Item = (props: Props) => {
  const data = useContext(TodoListStateContext)

  const handleChecked = () =>
    data.setTasks(
      data.tasks.map(task =>
        props.task.id === task.id ? { ...task, completed: !task.completed } : task
      )
    )

  const handleDelete = () => data.setTasks(data.tasks.filter(task => props.task.id !== task.id))

  return (
    <Div_TaskContainer>
      <Button_DeleteButton onClick={handleDelete}>
        <P_TodoBodyText>X</P_TodoBodyText>
      </Button_DeleteButton>
      <Input_Checkbox type='checkbox' checked={props.task.completed} onChange={handleChecked} />
      <P_TodoBodyText aria-checked={props.task.completed}>{props.task.name}</P_TodoBodyText>
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
  width: 900px;
  border: ${theme.spacing.borderSmall} solid ${theme.color.blackBoxShadow};
  border-radius: 10px;
  margin: ${theme.spacing.small};
  &:hover ${Button_DeleteButton} {
    opacity: 1;
  }
  ${theme.mediaQueries.tablet} {
    width: 78vw;
  }
  ${theme.mediaQueries.phone} {
    width: 240px;
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
