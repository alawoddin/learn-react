import Article from "../../components/article/Article";
import Header from "../../components/header/Header";
import styled from './home.module.css';


function Home ()  {

    let articles = [
        {
            id:1,
            // imageUrl: "https://www.w3schools.com/css/ocean.jpg",
            title: "متغیر جی است ",
            readingTime: 5,
        },

        {
            id:2,
            // imageUrl: "https://ik.imagekit.io/ikmedia/backlit.jpg",
            title: "عنوان اول",
            readingTime: 10,
        },
           {
            id:3,
            // imageUrl: "https://reshaped.so/img/examples/image-retina.webp",
            title: "تابع جی است ",
            readingTime: 8,
        },

            {
            id:4,
            // imageUrl: "https://reshaped.so/img/examples/image-retina.webp",
            title: "در حال تغبر ",
            readingTime: 6,
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
                             <Article key={article.id} article={article} />
                            
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