import { H1_MainHeading } from '../components/MainHeading'
import { H2_SubHeading } from '../components/SubHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Input_Input } from '../components/input'
import { P_BodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { Task } from './Task'
import { buttonStyles } from '../components/Button'
import { createId } from '../helpers/utils'
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
type Props = {
  children: React.ReactNode
}

export const genericHookContextBuilder = <T, P>(hook: () => T) => {
  const Context = React.createContext<T>(undefined as never)

  return {
    Context,
    ContextProvider: (props: Props & P) => {
      const value = hook()

      return <Context.Provider value={value}>{props.children}</Context.Provider>
    },
  }
}

const useLogicState = () => {
  const [tasks, setTasks] = useLocalStorage('localStorageTasks', [] as Task[])

  return {
    tasks,
    setTasks,
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

const filterMap = {
  all: () => true,
  active: (task: Task) => !task.completed,
  done: (task: Task) => task.completed,
}
const TodoList = () => {
  const { tasks, setTasks } = useContext(TodoListStateContext)
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
            if (name.length === 0) {
              setEmptyInputErr(true)
              return
            }
            setTasks([
              {
                id: createId(),
                name,
                completed: false,
              },
              ...tasks,
            ])
            setName('')
            setEmptyInputErr(false)
          }}
        >
          <Div_InputContainer>
            <H2_FormHeading>New task:</H2_FormHeading>
            <Input_Input
              placeholder='What are you going to postpone as long as possible?'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Button_TodoButton type='submit'>Add task</Button_TodoButton>
          </Div_InputContainer>
        </form>
        {emptyInputErr ? (
          <H2_ErrorHeading>Do you really need to write that down?</H2_ErrorHeading>
        ) : (
          ''
        )}
        <Div_FilterButtonContainer>
          {tasksLeftCounter >= 1 ? (
            <H2_ItemsLeftHeading>
              {tasksLeftCounter === 1
                ? `${tasksLeftCounter} item left`
                : `${tasksLeftCounter} items left`}
            </H2_ItemsLeftHeading>
          ) : (
            ''
          )}
          <Button_FilterButton onClick={() => setFilter('all')} aria-pressed={filter === 'all'}>
            All
          </Button_FilterButton>
          <Button_FilterButton
            onClick={() => setFilter('active')}
            aria-pressed={filter === 'active'}
          >
            Active
          </Button_FilterButton>
          <Button_FilterButton onClick={() => setFilter('done')} aria-pressed={filter === 'done'}>
            Done
          </Button_FilterButton>
        </Div_FilterButtonContainer>
        {tasks.filter(filterMap[filter]).map(task => (
          <Task key={task.id} id={task.id} name={task.name} completed={task.completed} />
        ))}
        <Div_FilterButtonContainer>
          <Button_FilterButton onClick={() => checkedAll()}>Check All</Button_FilterButton>
          <Button_FilterButton onClick={() => uncheckedAll()}>Uncheck All</Button_FilterButton>
          <Button_FilterButton onClick={() => deleteAllChecked()}>Clear Done</Button_FilterButton>
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
export const Button_TodoButton = styled.button`
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

export const Button_DeleteButton = styled.button`
  ${buttonStyles}
  position: absolute;
  width: ${theme.spacing.medium};
  height: ${theme.spacing.medium};
  top: 0;
  right: 0;
  opacity: 0;
`

export const Div_TaskContainer = styled.div`
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
