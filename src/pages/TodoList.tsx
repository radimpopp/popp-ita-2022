import { H1_MainHeading } from '../components/MainHeading'
import { H2_SubHeading } from '../components/SubHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Input_Checkbox, Input_Input } from '../components/input'
import { P_BodyText, P_TodoBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { buttonStyles } from '../components/Button'
import { createId } from '../helpers/utils'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import { useLocalStorage } from '../helpers/hooks'
import React, { useState } from 'react'
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

export const TodoList = () => {
  const [tasks, setTasks] = useLocalStorage('localStorageTasks', [] as Task[])
  const [name, setName] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'done'>('all')
  const [emptyInputErr, setEmptyInputErr] = useState(false)

  const handleChecked = (id: string) =>
    setTasks(tasks.map(task => (id === task.id ? { ...task, completed: !task.completed } : task)))

  const handleDelete = (id: string) => setTasks(tasks.filter(task => id !== task.id))

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
          <Div_TaskContainer key={task.id}>
            <Button_DeleteButton onClick={() => handleDelete(task.id)}>
              <P_TodoBodyText>X</P_TodoBodyText>
            </Button_DeleteButton>
            <Input_Checkbox
              type='checkbox'
              checked={task.completed}
              onChange={() => handleChecked(task.id)}
            />
            <P_TodoBodyText aria-checked={task.completed}>{task.name}</P_TodoBodyText>
          </Div_TaskContainer>
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
