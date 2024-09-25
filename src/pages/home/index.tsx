import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";
import ProductList from "../../components/ProductList";

const Home = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { user } = userContext;

  return (
    <>
      <div className="container mx-auto space-y-9 py-9">
        {/* {user && <h2>Hi {user?.username}</h2>} */}
        <ProductList headingText="New Arrivals" />
        <ProductList headingText="Top Selling" />
      </div>
    </>
  );
};

export default Home;
