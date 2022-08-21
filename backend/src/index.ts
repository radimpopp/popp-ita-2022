import { simplifiedInput } from './helpers/utils'
import cors from 'cors'
import express, { response } from 'express'
import fs from 'fs'

const app = express()
const port = 3500

app.use(cors())

type User = {
  id: number
  name: string
  email: string
  gender: string
}

app.get('/users/:search', (req, res) => {
  try {
    const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
    const data = JSON.parse(dataString).users

    const filteredUsers = data.filter((user: User) =>
      Object.values(user)
        .map(value => value.toString())
        .some(value => simplifiedInput(value).includes(simplifiedInput(req.params.search)))
    )

    res.send(filteredUsers)
  } catch (err) {
    res.status(500).json(err)
  }
})

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})
