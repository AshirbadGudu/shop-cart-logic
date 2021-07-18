import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CardHeader,
} from "@material-ui/core";
import { useCartContext } from "../hooks/";

const ProductCard = ({ product }) => {
  const { isInCart, addToCart } = useCartContext();
  return (
    <>
      <Grid item lg={3}>
        <Card>
          <CardHeader title={product.title} />
          <CardMedia src={product.image} title={product.title} />
          <CardContent>
            <Typography>{product.description}</Typography>
            <Typography>{product.prince}</Typography>

            <Button
              onClick={() => {
                if (isInCart(product._id))
                  return alert("You already added this product");
                addToCart(product);
              }}
              variant="contained"
              color="primary"
            >
              Add To Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
