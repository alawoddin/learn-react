import styled from './article.module.css';
import image from './../../assets/images/a1.jpg';

function Article() {
    return (
        <div className={styled.articleWrapper}>
            <img className={styled.image} src={image} alt="" />
            <h3>متغیر ها </h3>
            <p>تدریس متغیر ها </p>
        </div>
    )
}

export default Article;