import React, { useEffect, useState } from 'react'
import AllProductCard from './AllProductCard'
import { BeatLoader } from 'react-spinners';

const AllProduct = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        setLoading(true)
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((json) => {
                setData(json.products)
                // console.log(json.products)
                setLoading(false)
            })
    }, [])

    return (
        <div className='flex flex-wrap items-center gap-10 justify-center my-[50px]'>
            {
                loading ? <BeatLoader size={20} />
                    :
                    data.map((product, productIndex) => {
                        return (
                            < AllProductCard
                                key={productIndex}
                                productId={product.id}
                                productName={product.title}
                                currentPrice={product.price}
                                productPrice={product.price}
                                productImg={product.images[0]}
                            />
                        )
                    })

            }
        </div>
    )
}

export default AllProduct
