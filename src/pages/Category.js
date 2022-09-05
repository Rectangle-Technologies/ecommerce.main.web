import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import CategoryDesktop from '../components/category/desktop/CategoryDesktop';
import { connect } from 'react-redux';
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions';
import axios from 'axios';
import { BASE_URL_2 } from '../constants/urls';
import { useParams } from 'react-router-dom';

const Category = (props) => {
    const [category, setCategory] = useState()
    const [products, setProducts] = useState()
    const { enqueueSnackbar } = useSnackbar()
    const { id } = useParams()

    const fetchCategory = async () => {
        props.addLoader()
        try {
            let res = await axios.get(`${BASE_URL_2}/products/category/${id}`)
            setCategory(res.data.category)
            res = await axios.get(`${BASE_URL_2}/products/fetchByCategory/${id}`)
            setProducts(res.data.products)
            props.removeLoader()
        } catch (err) {
            console.log(err)
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
        fetchCategory()
    }, [id])

    return (
        <>
            <CategoryDesktop category={category} products={products} setProducts={setProducts} />
        </>
    )
}

export default connect(null, { addLoader, removeLoader })(Category)
