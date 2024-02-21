
const Person = (props) => {
 
    return (
      <div>
        <h1 onClick={props.handleClick}>my name is {props.name} and I am {props.age} years old</h1>
      </div>
    )
  }

export default Person