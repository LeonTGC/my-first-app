import Job from "./Job"

const Person = (props) => {
 
    return (
      <div>
        <h1>my name is {props.name} and I am {props.age} years old</h1>
        <Job myJob={props.job}/>
      </div>
    )
  }

export default Person