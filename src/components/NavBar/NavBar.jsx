import CartWidget from "./CartWidget"
import "./navbar.scss"


const NavBar = () => {

    const categories = ["Urbanas" , "Deportivas" , "Skater"]

    return(
        <nav className="navbar">
            <div className="brand">
            <img src="../logoZapatiza.jpg" alt="" />
            <p>Zapatiza</p>
            </div>

            <ul className="categories">
            {
                categories.map((category) => {
                    return <li>{category}</li>

                })
            }
            </ul>

            <CartWidget/>
        </nav>
    )
}    
export default NavBar