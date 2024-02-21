

const App = () => {
  return (
    <div>
      <h1>Info</h1>
      <Person name="Dave" age="33" petName="Bobby" petType="hamster" />
    </div>
  )
}

const Person = () => {
  return 
    <>
      <h2>name: , age: </h2>
      <Pet  />
    </>
  
}

const Pet = () => {
  return (
    <div>
      <p>Has a {} called {}</p>
    </div>
  )
}
export default App

