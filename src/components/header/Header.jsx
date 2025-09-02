

function Header() {
    return (
        <div>
            <h1>this is header </h1>

            <ul style={{listStyleType: "none" , display: "flex", justifyContent: "center", gap: "20px", backgroundColor: "gray"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}


export default Header;