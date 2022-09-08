import { Grid } from "@mui/material";
import axios from "axios";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import CategoriesLayout from "../components/CategoriesLayout";
import DoubleTextComponent from "../components/DoubleText";
import Caraousel from "../components/header/caraousel";
import ProductLayout from "../components/ProductLayout";
import { BASE_URL_2 } from "../constants/urls";
import { addLoader, removeLoader } from "../redux/services/actions/loaderActions";

const Landing = (props) => {
  const [products, setProducts] = useState([])

  const fetchNewArrivals = async () => {
    props.addLoader()
    try {
      const res = await axios.get(`${BASE_URL_2}/products/latest`)
      setProducts(res.data.products)
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
    fetchNewArrivals()
  }, [])
  return (
    <>
      {/* <Caraousel /> */}
      <DoubleTextComponent backText="What We Design" frontText="New Arrivals" />
      <Grid container spacing={3} style={{ padding: "0px 7.5vw 0px 7.5vw" }}>
        {products?.map((p, idx) => (
          <Grid item xs={6} lg={3}>
            <ProductLayout
              liked={true}
              new={true}
              title={p.name}
              mrp={p.price}
              imageUrl={p.imageUrls[0]}
            />
          </Grid>
        ))}
      </Grid>
      <DoubleTextComponent backText="What We Have" frontText="Categories" />
      <Grid container spacing={3} style={{ padding: "0px 7.5vw 0px 7.5vw", marginBottom: "50px" }}>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="/1.jpeg" title="Saree" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="2.jpeg" title="Kurtis" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="3.jpeg" title="Full Sets" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="4.png" title="Jewellery" />
        </Grid>
      </Grid>
    </>
  );
};

export default connect(null, { addLoader, removeLoader })(Landing);
