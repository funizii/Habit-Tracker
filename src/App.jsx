import { useState } from 'react'

import './App.css'
import Header from './data/header'
import HabitList from './data/habit-list'
import Habits from './habits'
import DateDisplay from './date'




function App() {

const habitList = HabitList.map((habit) => {
  return (
   // App.jsx
<Habits key={habit.id} habit={habit} />
  )
})

  return (
    <div className="App">
      <Header />
      <DateDisplay />
      <main>
      {habitList} 
    </main>
    </div>
  )
}
export default App
