import Header from "../components/Menu/Header";
import Meals from "../components/Menu/Meals";

function Menu() {
    return (
        <div style={{ background: 'linear-gradient(#29251c, #2c2306)', minHeight: '100vh' }}>
            <Header />
            <Meals />
        </div>
    )
}

export default Menu;