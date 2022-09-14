import { AppDispatch } from './store'
import { Input_Checkbox } from '../../components/input'
import { Task } from '../todoRedux/TodoApp'
import { theme } from '../../helpers/themes'
import { todoActions } from './todoSlice'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import styled from 'styled-components'
import trashicon from '../../images/trashicon.svg'

export type DragProps = Task & {
  index: number
  dragTask: React.MutableRefObject<number>
  dragOverTask: React.MutableRefObject<number>
}

export const TodoItem = (props: DragProps) => {
  const [newTodoItem, setNewTodoItem] = useState(props.task!)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch<AppDispatch>()

  return (
    <Li_ListItem
      draggable='true'
      onDragStart={() => {
        props.dragTask.current = props.index
      }}
      onDragEnter={() => {
        props.dragOverTask.current = props.index
      }}
      onDragEnd={() => {
        dispatch(
          todoActions.sortTask({
            dragTask: props.dragTask.current,
            dragOverTask: props.dragOverTask.current,
          })
        )
      }}
    >
      <>
        <Input_Checkbox
          type='checkbox'
          onChange={() => {
            dispatch(todoActions.handleCheck(props.id))
          }}
          checked={props.completed}
        />
        <Div_TodoItemContainer onClick={() => setEdit(true)}>
          {edit ? (
            <Form_Styled
              onSubmit={e => {
                e.preventDefault()
                if (newTodoItem.length === 0) {
                  return
                }
                dispatch(todoActions.editTodo({ id: props.id, newTodoItem: newTodoItem }))
                setNewTodoItem(newTodoItem)
                setEdit(false)
              }}
            >
              <Input_Edit
                type='text'
                value={newTodoItem}
                onChange={e => setNewTodoItem(e.target.value)}
                autoFocus
              />
            </Form_Styled>
          ) : (
            <P_TodoBodyText aria-checked={props.completed}>{props.task}</P_TodoBodyText>
          )}
        </Div_TodoItemContainer>
      </>
      <Img_Delete
        src={trashicon}
        onClick={() => {
          dispatch(todoActions.removeTodo(props.id))
        }}
      />
    </Li_ListItem>
  )
}

const Li_ListItem = styled.li`
  background-color: ${theme.color.salmon};
  position: relative;
  display: flex;
  justify-content: center;
  width: 900px;
  min-height: 30px;
  border-radius: 10px;
  margin: ${theme.spacing.small};
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  ${theme.mediaQueries.tablet} {
    width: 78vw;
  }
  ${theme.mediaQueries.phone} {
    width: 240px;
  }
`

const Div_TodoItemContainer = styled.div`
  width: 90%;
  height: 100%;
`

const Form_Styled = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input_Edit = styled.input`
  font-size: ${theme.fontSize.small};
  padding: ${theme.spacing.small};
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`

const Img_Delete = styled.img`
  cursor: pointer;
  position: absolute;
  margin-top: 3px;
  width: ${theme.spacing.large};
  height: ${theme.spacing.large};
  right: 0;
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
