import HomePage from "../../pages/HomePage"
import './styles.scss'

const Layout = () => {
    return (
        <>
            <header>
                <span>Youth Store</span>

                <nav>
                    <a href="/">Home</a>
                    <a href="/categorias">Categorias</a>
                    <a href="/sobre">Sobre</a>
                </nav>
            </header>

            <HomePage />

            <footer>
                <span>Youth Store</span>

                <nav>
                    <a href="/">Home</a>
                    <a href="/categorias">Categorias</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/termos">Termos</a>
                    <a href="/ajuda">Ajuda</a>
                    <a href="/localizacao">Localização</a>
                </nav>
            </footer>
        </>
    )
}

export default Layout