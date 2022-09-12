import { H1_MainHeading } from '../../components/MainHeading'
import { H2_FormHeading } from '../../components/SubHeading'
import { Helmet } from 'react-helmet-async'
import { Input_Input } from '../../components/input'
import { Item } from '../todolist/Task'
import { buttonStyles } from '../../components/Button'
import { createId } from '../../helpers/utils'
import { genericHookContextBuilder } from '../../helpers/utils'
import { theme } from '../../helpers/themes'
import { useLocalStorage } from '../../helpers/hooks'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type Task = {
  id: string
  name: string
  completed: boolean
}

const filterMap = {
  all: () => true,
  active: (task: Task) => !task.completed,
  done: (task: Task) => task.completed,
}

const setTodoState = () => {
  const [tasks, setTasks] = useLocalStorage('localStorageTasks', [] as Task[])
  const [name, setName] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'done'>('all')
  const [emptyInputErr, setEmptyInputErr] = useState(false)

  const tasksLeftCounter = tasks.filter(task => !task.completed).length

  const checkedAll = () =>
    setTasks(
      tasks.map(task => (task.completed === false ? { ...task, completed: !task.completed } : task))
    )

  const uncheckedAll = () =>
    setTasks(
      tasks.map(task => (task.completed === true ? { ...task, completed: !task.completed } : task))
    )

  const deleteAllChecked = () => setTasks(tasks.filter(task => task.completed === false))

  return {
    tasks,
    setTasks,
    name,
    setName,
    filter,
    setFilter,
    emptyInputErr,
    setEmptyInputErr,
    tasksLeftCounter,
    checkedAll,
    uncheckedAll,
    deleteAllChecked,
  }
}

export const { ContextProvider: TodoListContextProvider, Context: TodoListStateContext } =
  genericHookContextBuilder(setTodoState)

export const TodoListApp = () => {
  return (
    <TodoListContextProvider>
      <TodoList />
    </TodoListContextProvider>
  )
}

const TodoList = () => {
  const data = useContext(TodoListStateContext)

  return (
    <Div_TodoContainer>
      <Helmet>
        <title>Radim Popp/Todo List</title>
        <meta name='Description' content='Todo List app' />
      </Helmet>
      <H1_MainHeading>Todo List</H1_MainHeading>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (data.name.length === 0) {
            data.setEmptyInputErr(true)
            return
          }
          data.setTasks([
            {
              id: createId(),
              name: data.name,
              completed: false,
            },
            ...data.tasks,
          ])
          data.setName('')
          data.setEmptyInputErr(false)
        }}
      >
        <Div_InputContainer>
          <H2_FormHeading>New task:</H2_FormHeading>
          <Input_Input
            placeholder='What are you going to postpone as long as possible?'
            type='text'
            value={data.name}
            onChange={e => data.setName(e.target.value)}
            autoFocus={true}
            autoComplete='off'
          />
          <Button_TodoButton type='submit'>Add task</Button_TodoButton>
        </Div_InputContainer>
      </form>
      {data.emptyInputErr ? (
        <H2_ErrorHeading>Do you really need to write that down?</H2_ErrorHeading>
      ) : (
        ''
      )}
      {data.tasks.length > 0 && (
        <div>
          <Div_FilterButtonContainer>
            {data.tasksLeftCounter >= 1 ? (
              <H2_ItemsLeftHeading>
                {data.tasksLeftCounter === 1
                  ? `${data.tasksLeftCounter} item left`
                  : `${data.tasksLeftCounter} items left`}
              </H2_ItemsLeftHeading>
            ) : (
              ''
            )}

            <Button_FilterButton
              onClick={() => data.setFilter('all')}
              aria-pressed={data.filter === 'all'}
            >
              All
            </Button_FilterButton>
            <Button_FilterButton
              onClick={() => data.setFilter('active')}
              aria-pressed={data.filter === 'active'}
            >
              Active
            </Button_FilterButton>
            <Button_FilterButton
              onClick={() => data.setFilter('done')}
              aria-pressed={data.filter === 'done'}
            >
              Done
            </Button_FilterButton>
          </Div_FilterButtonContainer>
          <Div_ItemContainer>
            {data.tasks.filter(filterMap[data.filter]).map(task => (
              <Item key={task.id} task={task} />
            ))}
          </Div_ItemContainer>
          <Div_FilterButtonContainer>
            <Button_FilterButton onClick={() => data.checkedAll()}>Check All</Button_FilterButton>
            <Button_FilterButton onClick={() => data.uncheckedAll()}>
              Uncheck All
            </Button_FilterButton>
            <Button_FilterButton onClick={() => data.deleteAllChecked()}>
              Clear Done
            </Button_FilterButton>
          </Div_FilterButtonContainer>
        </div>
      )}
    </Div_TodoContainer>
  )
}

const Div_TodoContainer = styled.div`
  max-width: 100vw;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.black};
`

const Div_InputContainer = styled.div`
  padding: ${theme.spacing.medium} 0 ${theme.spacing.extraSmall} 0;
  display: flex;
  align-items: center;
  ${theme.mediaQueries.phone} {
    flex-direction: column;
  }
`

const Div_FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: ${theme.spacing.large};
  padding-bottom: ${theme.spacing.large};
  background-color: ${theme.color.black};
  ${theme.mediaQueries.tablet} {
    width: 80vw;
  }
  ${theme.mediaQueries.phone} {
    flex-direction: column;
  }
`

const H2_ItemsLeftHeading = styled(H2_FormHeading)`
  text-align: right;
  width: 120px;
  ${theme.mediaQueries.phone} {
    text-align: center;
  }
`

const H2_ErrorHeading = styled(H2_FormHeading)`
  padding-bottom: unset;
  ${theme.mediaQueries.phone} {
    padding-top: ${theme.spacing.small};
    text-align: center;
    white-space: unset;
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

const Div_ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${theme.spacing.medium};
  padding-bottom: ${theme.spacing.medium};
  ${theme.mediaQueries.tablet} {
    width: 80vw;
  }
`
