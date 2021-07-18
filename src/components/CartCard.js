import {
  Card,
  Typography,
  CardContent,
  Button,
  Grid,
  CardHeader,
} from "@material-ui/core";
import { useCartContext } from "../hooks";

const CartCard = ({ item }) => {
  const { removeFromCart } = useCartContext();
  return (
    <Grid item lg={3} key={item._id}>
      <Card>
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
