import { H1_MainHeading } from '../components/MainHeading'
import { H2_SubHeading } from '../components/SubHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Input_Input } from '../components/input'
import { P_BodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { Task } from '../todolist/Task'
import { buttonStyles } from '../components/Button'
import { createId } from '../helpers/utils'
import { genericHookContextBuilder } from '../helpers/utils'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import { useLocalStorage } from '../helpers/hooks'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

type Task = {
  id: string
  name: string
  completed: boolean
}

const filterMap = {
  all: () => true,
  active: (task: Task) => !task.completed,
  done: (task: Task) => task.completed,
}

const useLogicState = () => {
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
  genericHookContextBuilder(useLogicState)

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
    <HelmetProvider>
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
        {data.tasks.filter(filterMap[data.filter]).map(task => (
          <Task key={task.id} {...task} />
        ))}
        <Div_FilterButtonContainer>
          <Button_FilterButton onClick={() => data.checkedAll()}>Check All</Button_FilterButton>
          <Button_FilterButton onClick={() => data.uncheckedAll()}>Uncheck All</Button_FilterButton>
          <Button_FilterButton onClick={() => data.deleteAllChecked()}>
            Clear Done
          </Button_FilterButton>
        </Div_FilterButtonContainer>
        <RouterLink to={urls.homeUrl}>
          <P_BodyText>Return home</P_BodyText>
        </RouterLink>
      </Div_TodoContainer>
    </HelmetProvider>
  )
}

const Div_TodoContainer = styled.div`
  padding: ${theme.spacing.extraLarge};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div_InputContainer = styled.div`
  padding: ${theme.spacing.small} 0 ${theme.spacing.extraSmall} 0;
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
  ${theme.mediaQueries.tablet} {
    width: 80%;
  }
  ${theme.mediaQueries.phone} {
    flex-direction: column;
  }
`

const H2_FormHeading = styled(H2_SubHeading)`
  white-space: nowrap;
  padding-bottom: unset;
`

const H2_ItemsLeftHeading = styled(H2_FormHeading)`
  text-align: right;
  width: 120px;
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
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin-left: ${theme.spacing.medium};
  ${theme.mediaQueries.phone} {
    margin: unset;
  }
`

const Button_FilterButton = styled.button`
  ${buttonStyles}
  width: 200px;
  height: 40px;
  border-radius: 10px;
  &[aria-pressed='true'] {
    background-color: ${theme.color.yellowBright};
  }
`
