import styled from './article.module.css';
// import image from './../../assets/images/a1.jpg';

function Article(props) {
    return (
        <div className={styled.articleWrapper}>
            <img className={styled.image} src={props.article.imageUrl} alt="" />
            <h3> {props.article.title} </h3>
            <p> {props.article.readingTime}تدریس متغیر ها </p>
        </div>
    )
}

export default Article;