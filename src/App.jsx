import React from 'react'
import Bgcolor from './Components/Bgcolor'
import PasswordGenerator from './Components/PasswordGenerator'
import Input from './Components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Container from './Components/Container'
import ThemeChanger from './Components/ThemeChanger'
import TodoFunctionality from './Components/TodoFunctionality'
import ProductDisplay from './Components/ProductDisplay'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

import {Provider} from 'react-redux'
import {store} from './app/store'


function App() {

  return (
    <>
    
     <Provider store= {store}>
      <AddTodo/>
      <Todos/>
     </Provider>

    <ProductDisplay/>
    <ThemeChanger/>
    <TodoFunctionality/>
    <Container/>
    <Bgcolor/>
    <PasswordGenerator/>
    </>
  )
}

export default App
