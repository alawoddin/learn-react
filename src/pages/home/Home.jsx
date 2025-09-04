import Article from "../../components/article/Article";
import Header from "../../components/header/Header";
import styled from './home.module.css';


function Home ()  {
    return (
        <div className={styled.homeWrapper}>
            <Header title= 'develoepr'/>
            <div className="container">
                <h2>home</h2>

                <div className={styled.articles}>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />

                </div>

            </div>
        </div>
    )
}

export default Home;