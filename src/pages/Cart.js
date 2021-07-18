import { Container, Typography, Button, Grid } from "@material-ui/core";
import { CartCard } from "../components";
import { useCartContext } from "../hooks";

const Cart = () => {
  const { cartItems, clearCart } = useCartContext();
  return (
    <Container
      style={{
        marginTop: "2vh",
      }}
    >
      <Typography variant="h5">Cart</Typography>
      <Button
        disabled={!cartItems.length}
        variant="contained"
        color="secondary"
        onClick={() => clearCart()}
      >
        Clear Cart
      </Button>
      <Grid container spacing={2}>
        {cartItems?.map((item) => (
          <CartCard key={item._id} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Cart;
