import { useEffect, useState } from "react"
import './styles.scss'

type ProductType = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

const HomePage = () => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(
        // consequência
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProducts(json))
        },

        // causa
        []
    )

    return (
        <>
            <div className="row">
                <h2>Lançamentos</h2>
            </div>
            <div className="row">
                {products.map((product) => (
                    <div className="col-6 col-md-3">
                        <div className="card product-card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <a href={'/products/' + product.id} className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomePage