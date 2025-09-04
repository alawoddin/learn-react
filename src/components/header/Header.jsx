import styled from './Header.module.css'


function Header() {

        let title = 'logo';

    return (

        <div className={styled.header}>

            <h1>{title}</h1>

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