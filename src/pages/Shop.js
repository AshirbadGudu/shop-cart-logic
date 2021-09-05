import { useProducts } from "../hooks";
import { ProductCard } from "../components";
import {
  Breadcrumbs,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
const Shop = () => {
  const { products, isFetching } = useProducts();
  return (
    <Container>
      <Breadcrumbs
        style={{
          margin: "2vh 0",
        }}
      >
        <Typography color="textPrimary">E-Commerce</Typography>
        <Typography>Products</Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        {isFetching
          ? Array(12)
              .fill("skeleton-item-")
              .map((item, i) => (
                <Grid item key={item + i} lg={3}>
                  <Card>
                    <Skeleton variant="rect" width={"100%"} height={150} />
                    <CardContent>
                      <Skeleton variant="rect" width={"100%"} height={10} />
                      <Skeleton
                        variant="rect"
                        width={"100%"}
                        height={10}
                        style={{ marginTop: 10 }}
                      />
                      <Skeleton
                        variant="rect"
                        width={"100%"}
                        height={15}
                        style={{ marginTop: 15 }}
                      />
                      <Skeleton
                        variant="rect"
                        width={"100%"}
                        height={35}
                        style={{ marginTop: 15 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))
          : products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </Grid>
    </Container>
  );
};

export default Shop;
