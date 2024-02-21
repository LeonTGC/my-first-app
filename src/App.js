import f1 from './images/f1.jpg'
import ben from './images/benstokes.jpg'
import city from './images/city.jpg'
import tuchel from './images/tuchel.jpg'
import './BbcStyles.css'
const App = () => {
  return (
    <div className='collection'>
      <Card img={f1} title="F1 Testing" category="Formula 1"/>
      <Card img={ben} title="Ben Stokes injured" category="Cricket"/>
      <Card img={city} title="Haaland scores again" category="Football"/>
      <Card img={tuchel} title="Tuchel to leave at the end of the season" category="Football"/>
    </div>
  )
}

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.category}</p>
    </div>
  )
}
export default App



