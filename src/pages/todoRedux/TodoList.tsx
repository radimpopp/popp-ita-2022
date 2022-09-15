import { AppDispatch, RootState } from './store'
import { H1_MainHeading } from '../../components/MainHeading'
import { H2_FormHeading } from '../../components/SubHeading'
import { Helmet } from 'react-helmet-async'
import { Input_Input } from '../../components/input'
import { Task } from '../todoRedux/TodoApp'
import { TodoItem } from './Task'
import { buttonStyles } from '../../components/Button'
import { theme } from '../../helpers/themes'
import { todoActions } from './todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

export const TodoList = () => {
  const [task, setTask] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'done'>('all')

  const todoList = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  const filterMap = {
    all: () => true,
    active: (task: Task) => !task.completed,
    done: (task: Task) => task.completed,
  }

  const dragTask = useRef(0)
  const dragOverTask = useRef(0)

  const tasksLeftCounter = todoList.filter(filterMap['all']).length
  const activeTasksLeftCounter = todoList.filter(filterMap['active']).length

  return (
    <Div_TodoContainer>
      <Helmet>
        <title>Radim Popp/Todo List Redux</title>
      </Helmet>
      <H1_MainHeading>Todo List Redux</H1_MainHeading>
      <Div_BorderContainer>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (task.length === 0) {
              return
            }
            dispatch(todoActions.addTodo(task))
            setTask('')
          }}
        >
          <Div_InputContainer>
            <H2_FormHeading>New task:</H2_FormHeading>
            <Input_Styled
              placeholder='What are you going to postpone as long as possible?'
              type='text'
              onChange={e => setTask(e.target.value)}
              value={task}
              autoFocus={true}
              autoComplete='off'
            />
            <Button_TodoButton type='submit'>Add task</Button_TodoButton>
          </Div_InputContainer>
        </form>
        {tasksLeftCounter > 0 && (
          <div>
            <Div_FilterButtonContainer>
              {activeTasksLeftCounter >= 1 ? (
                <H2_ItemsLeftHeading>
                  {activeTasksLeftCounter === 1
                    ? `${activeTasksLeftCounter} item left`
                    : `${activeTasksLeftCounter} items left`}
                </H2_ItemsLeftHeading>
              ) : (
                ''
              )}
              <Button_FilterButton onClick={() => setFilter('all')} aria-pressed={'all' === filter}>
                All
              </Button_FilterButton>
              <Button_FilterButton
                onClick={() => setFilter('active')}
                aria-pressed={'active' === filter}
              >
                Active
              </Button_FilterButton>
              <Button_FilterButton
                onClick={() => setFilter('done')}
                aria-pressed={'done' === filter}
              >
                Done
              </Button_FilterButton>
            </Div_FilterButtonContainer>
            <Ul_List>
              {todoList.filter(filterMap[filter]).map((todoList, i) => (
                <TodoItem
                  id={todoList.id}
                  key={todoList.id}
                  task={todoList.task}
                  completed={todoList.completed}
                  index={i}
                  dragTask={dragTask}
                  dragOverTask={dragOverTask}
                />
              ))}
            </Ul_List>
            <Div_FilterButtonContainer>
              <Button_FilterButton
                onClick={() => {
                  dispatch(todoActions.checkAll())
                }}
              >
                Check All
              </Button_FilterButton>
              <Button_FilterButton
                onClick={() => {
                  dispatch(todoActions.uncheckAll())
                }}
              >
                Uncheck All
              </Button_FilterButton>
              <Button_FilterButton
                onClick={() => {
                  dispatch(todoActions.deleteAllChecked())
                }}
              >
                Clear Done
              </Button_FilterButton>
            </Div_FilterButtonContainer>
          </div>
        )}
      </Div_BorderContainer>
    </Div_TodoContainer>
  )
}

const Div_InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${theme.mediaQueries.phone} {
    flex-direction: column;
  }
`

const Button_TodoButton = styled.button`
  ${buttonStyles}
  width: 240px;
  height: 40px;
  margin-left: ${theme.spacing.medium};
  border-radius: 10px;
  background: ${theme.color.white};
  color: ${theme.color.black};
  &:hover {
    background: ${theme.color.salmon};
    color: ${theme.color.white};
    transition: 0.3s;
  }
  ${theme.mediaQueries.tablet} {
    width: 20vw;
  }
  ${theme.mediaQueries.phone} {
    width: 240px;
    margin: unset;
  }
`

const Ul_List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${theme.spacing.medium};
  padding-bottom: ${theme.spacing.medium};
  ${theme.mediaQueries.tablet} {
    width: 80vw;
  }
`

const Button_FilterButton = styled.button`
  ${buttonStyles}
  width: 240px;
  height: 40px;
  border-radius: 10px;
  background: ${theme.color.white};
  color: ${theme.color.black};
  &:hover {
    background: ${theme.color.salmon};
    color: ${theme.color.white};
    transition: 0.3s;
  }
  &[aria-pressed='true'] {
    background-color: ${theme.color.salmon};
    color: ${theme.color.white};
  }
`

const Div_FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: ${theme.spacing.large};
  padding-bottom: ${theme.spacing.large};
  background-color: ${theme.color.black};
  border-top: 2px solid ${theme.color.white};
  margin-top: ${theme.spacing.medium};
  &:not(:last-child) {
    border-bottom: 2px solid ${theme.color.white};
  }
  ${theme.mediaQueries.tablet} {
    width: 80vw;
  }
  ${theme.mediaQueries.phone} {
    flex-direction: column;
  }
`

const Div_BorderContainer = styled.div`
  border: 2px solid ${theme.color.white};
  border-radius: 10px;
  margin: ${theme.spacing.medium} 0;
  padding: ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H2_ItemsLeftHeading = styled(H2_FormHeading)`
  text-align: right;
  width: 120px;
  ${theme.mediaQueries.phone} {
    text-align: center;
  }
`

const Div_TodoContainer = styled.div`
  max-width: 100vw;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.black};
`

const Input_Styled = styled(Input_Input)`
  margin: unset;
  margin-left: ${theme.spacing.medium};
  ${theme.mediaQueries.phone} {
    margin-left: unset;
    margin: ${theme.spacing.medium} 0;
  }
`
