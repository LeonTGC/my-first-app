import { useState } from "react"
import ben from './images/benstokes.jpg'
import city from './images/city.jpg'
import f1 from './images/f1.jpg'
import tuchel from './images/tuchel.jpg'

const BbcSection = () => {
    const [articles, setArticles] = useState([
        { img: ben, title:"Ben is injured", category:"Cricket" },
        { img: city, title:"Haaland scores again", category:"Football" },
        { img: f1, title:"F1 Testing", category:"Formula One" },
        { img: tuchel, title:"Tuchel to leave at the end of the season", category:"Football" },
    ])
    return (
        <div>
        {/* map through the aritcles  */}
        {articles.map((article) => {
            {/* and display a card for each item in the articles array */}
            {/* passing the item as a prop */}
            return <Card img={article.img} title={article.title} category={article.category}/>
        })}
        </div>
    )
}

const Card = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h2>{props.title}</h2>
            <p>{props.category}</p>
        </div>
    )
}

export default BbcSection