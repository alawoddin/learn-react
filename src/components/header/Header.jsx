import styled from './Header.module.css'


function Header(props) {

        // let title = 'logo';

    return (
        <div className={styled.headerWrappper}>
             <div className='container'>
             <div className={styled.header}>

            {/* <h1>{title}</h1> */}
            {/* <h1>{props.title}</h1> */}
            
            <h1>{props.title}</h1>
            <h4>{props.name}</h4>

            {/* <ul style={{listStyleType: "none" , display: "flex", justifyContent: "center", gap: "20px", backgroundColor: "gray"}}> */}
               <ul>
                <li>خانه</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
            </ul>
        </div>
        </div>
        </div>
       

       
    )
}


export default Header;