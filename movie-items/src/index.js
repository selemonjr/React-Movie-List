import React from 'react';
import ReactDOM from 'react-dom'
import "./index.css";
const Movies = [{
    id:1,
    img:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
    title:"Spider-Man: Far From Home"
}, {
    id:2,
    img:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
    title:"Black Widow"
}, {
    id:3,
    img:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
    title:"Shang-Chi and The Legend Of The Ten Rings"
},{
    id:4,
    img:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther2_lob_crd_02.jpg",
    title:"Black Panther: Wakanda Forever"
}, {
    id:5,
    img:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg",
    title:"Ant-Man"
}, {
    id:6,
    img:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg",
    title:"Thor"
}];

const MovieList = () => {
    return (
        <section className="lists">
        {Movies.map((movie) => {
            return <MovieEl key={movie.id} {...movie}/>
        })}
        </section>
    )
}

const MovieEl = (props) => {
    const {img,title} = props
    return (
        <article className="row">
        <img src={img} alt="" />
        <h2>{title}</h2>
        </article>
    )
}
ReactDOM.render(<MovieList/>,document.getElementById("root"))
