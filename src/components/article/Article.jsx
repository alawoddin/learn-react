import styled from './article.module.css';
import image from './../../assets/images/a1.jpg';

function Article() {
    return (
        <div className={styled.articleWrapper}>
            <img className={styled.image} src={image} alt="" />
            <h3>what variable</h3>
            <p>we ready in 5 min</p>
        </div>
    )
}

export default Article;