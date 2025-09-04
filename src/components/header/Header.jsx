import styled from './Header.module.css'


function Header() {
    return (
        <div className={styled.header}>

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