import {
  Card,
  Typography,
  CardContent,
  Button,
  Grid,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { useCartContext } from "../hooks";

const CartCard = ({ item }) => {
  const { removeFromCart } = useCartContext();
  return (
    <Grid item lg={2}>
      <Card>
        <CardMedia
          image={`/${item.image}`}
          title={item.title}
          style={{
            height: 180,
            backgroundSize: "contain",
          }}
        />
        <CardHeader title={item.title} />
        <CardContent>
          <Typography>{item.description}</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeFromCart(item._id)}
          >
            Remove
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CartCard;
