import { Cart, Shop } from "pages";
import { Route, Switch } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/login" component={Cart} />
      </Switch>
    </>
  );
};

export default PublicRoutes;
