import { useProducts } from "../hooks";
import { ProductCard } from "../components";
import { Breadcrumbs, Container, Grid, Typography } from "@material-ui/core";
const Shop = () => {
  const { products } = useProducts();
  return (
    <Container
      style={{
        marginTop: "2vh",
      }}
    >
      <Breadcrumbs>
        <Typography color="textPrimary">E-Commerce</Typography>
        <Typography>Products</Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
