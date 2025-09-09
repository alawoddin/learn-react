import Article from "../../components/article/Article";
import Header from "../../components/header/Header";
import styled from './home.module.css';


function Home ()  {

    let articles = [
        {
            id:1,
            imageUrl: "",
            title: "demo",
            readingTime: 5,
        },

        {
            id:2,
            imageUrl: "",
            title: "demmo1",
            readingTime: 10,
        },
           {
            id:3,
            imageUrl: "",
            title: "demo2",
            readingTime: 10,
        }
    ]


    return (
        <div className={styled.homeWrapper}>
            <Header title= 'لوک'/>
            <div className="container">
                <h2 style={{marginBottom: "20px"}}>روزنامه</h2>

                <div className={styled.articles}>

                    {
                        articles.map(article =>(
                             <Article />
                            
                        ))
                    }
            {/* <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article /> */}

                </div>

            </div>
        </div>
    )
}

export default Home;