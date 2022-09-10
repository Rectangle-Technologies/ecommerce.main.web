import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import axios from 'axios'
import { BASE_URL_2 } from '../constants/urls'
import SearchDesktop from '../components/search/desktop/SearchDesktop'
import SearchMobile from '../components/search/mobile/SearchMobile'

const Search = (props) => {
    const { name } = useParams()
    const [products, setProducts] = useState()

    const fetchProducts = async () => {
        props.addLoader()
        try {
            const res = axios(`${BASE_URL_2}/products/get?search=${name}`)
            setProducts((await res).data.products)
            props.removeLoader()
        } catch (err) {
            props.removeLoader()
            let message = 'Something went wrong'
            if (err?.response?.data?.errors) {
                message = err?.response?.data?.errors[0].msg
            } else if (err?.response?.data?.message) {
                message = err?.response?.data?.message
            }
            enqueueSnackbar(message, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <SearchDesktop products={products} setProducts={setProducts} name={name} />
            {/* <SearchMobile products={products} setProducts={setProducts} name={name} /> */}
        </>
    )
}

export default connect(null, { addLoader, removeLoader })(Search)
