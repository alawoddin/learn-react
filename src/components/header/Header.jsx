import "./Header.css"

function Header() {
    return (
        <div>
            <h1 className="header">this is header </h1>

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