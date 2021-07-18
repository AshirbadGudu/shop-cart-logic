import { useProducts } from "../hooks";
import { ProductCard } from "../components";
import { Container, Grid, Typography } from "@material-ui/core";
const Shop = () => {
  const { products } = useProducts();
  return (
    <Container
      style={{
        marginTop: "2vh",
      }}
    >
      <Typography variant="h5">Products</Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
