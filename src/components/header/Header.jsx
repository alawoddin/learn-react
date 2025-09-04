import styled from './Header.module.css'


function Header(props) {

        // let title = 'logo';

    return (

        <div className={styled.header}>

            {/* <h1>{title}</h1> */}
            {/* <h1>{props.title}</h1> */}
            
            <h1>{props.title}</h1>
            <h4>{props.name}</h4>

            {/* <ul style={{listStyleType: "none" , display: "flex", justifyContent: "center", gap: "20px", backgroundColor: "gray"}}> */}
               <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}


export default Header;