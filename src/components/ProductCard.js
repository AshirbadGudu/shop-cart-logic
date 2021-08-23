import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CardHeader,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import { formatCurrency } from "helpers";
import { useCartContext } from "../hooks/";

const ProductCard = ({ product }) => {
  const { isInCart, addToCart } = useCartContext();
  return (
    <>
      <Grid item lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              image={product.image}
              title={product.title}
              style={{
                height: 150,
                backgroundSize: "contain",
              }}
            />
          </CardActionArea>
          <CardHeader
            title={
              <Typography>
                {product.title.length < 25
                  ? product.title
                  : product.title.substring(0, 25) + "..."}
              </Typography>
            }
            subheader={formatCurrency(product.price)}
          />
          <CardContent>
            <Typography>
              {product.description.length < 50
                ? product.description
                : product.description.substring(0, 50) + "..."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
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
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
