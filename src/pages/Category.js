import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import CategoryDesktop from '../components/category/desktop/CategoryDesktop';
import { connect } from 'react-redux';
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions';
import axios from 'axios';
import { BASE_URL_2 } from '../constants/urls';
import { useParams } from 'react-router-dom';
import CategoryMobile from '../components/category/mobile/CategoryMobile';
import Desktop from '../components/responsive/Desktop'
import Tablet from '../components/responsive/Tablet'
import Mobile from '../components/responsive/Mobile'

const Category = (props) => {
    const [category, setCategory] = useState()
    const [products, setProducts] = useState()
    const [page, setPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)
    const limit = 12
    const { enqueueSnackbar } = useSnackbar()
    const { id } = useParams()

    const fetchCategory = async () => {
        props.addLoader()
        try {
            let res = await axios.get(`${BASE_URL_2}/products/category/${id}`)
            setCategory(res.data.category)
            res = await axios.get(`${BASE_URL_2}/products/fetchByCategory/${id}?page=${page}&limit=${limit}`)
            setProducts(res.data.products)
            setMaxPages(Math.ceil(res.data.count / limit))
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
        fetchCategory()
    }, [id, page])

    return (
        <>
            <Desktop>
                <CategoryDesktop
                    category={category}
                    products={products}
                    setProducts={setProducts}
                    page={page}
                    setPage={setPage}
                    maxPages={maxPages}
                />
            </Desktop>
            <Tablet>
                <CategoryDesktop
                    category={category}
                    products={products}
                    setProducts={setProducts}
                    page={page}
                    setPage={setPage}
                    maxPages={maxPages}
                />
            </Tablet>
            <Mobile>
                <CategoryMobile
                    category={category}
                    products={products}
                    setProducts={setProducts}
                    page={page}
                    setPage={setPage}
                    maxPages={maxPages}
                />
            </Mobile>
        </>
    )
}

export default connect(null, { addLoader, removeLoader })(Category)
