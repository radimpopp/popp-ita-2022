import { Input_Checkbox } from '../../components/input'
import { Task } from '../todolist/TodoList'
import { TodoListStateContext } from '../todolist/TodoList'
import { theme } from '../../helpers/themes'
import React, { useContext } from 'react'
import styled from 'styled-components'
import trashicon from '../../images/trashicon.svg'

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
      <Img_Delete src={trashicon} onClick={handleDelete} />
      <Input_Checkbox type='checkbox' checked={props.task.completed} onChange={handleChecked} />
      <P_TodoBodyText aria-checked={props.task.completed}>{props.task.name}</P_TodoBodyText>
    </Div_TaskContainer>
  )
}

const Img_Delete = styled.img`
  cursor: pointer;
  position: absolute;
  margin-top: 3px;
  width: ${theme.spacing.large};
  height: ${theme.spacing.large};
  right: 0;
`

const Div_TaskContainer = styled.div`
  background-color: ${theme.color.salmon};
  position: relative;
  display: flex;
  justify-content: center;
  width: 900px;
  border: 2px solid ${theme.color.blackBoxShadow};
  border-radius: 10px;
  margin: ${theme.spacing.small};
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
