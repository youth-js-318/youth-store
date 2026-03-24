import { useEffect, useState } from "react"

const HomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(
        // consequência
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => console.log(json))
        },

        // causa
        []
    )

    return (
        <h1>Home Page</h1>
    )
}

export default HomePage