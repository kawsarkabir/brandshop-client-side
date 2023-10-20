import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const MyCart = () => {
  const loadedProduct = useLoaderData();

  const [myCartProducts, setMyCartProducts] = useState(loadedProduct);
  const { user } = useContext(AuthContext);
  const myCartProduct = loadedProduct.filter(
    (product) => product.userId === user.uid
  );
  const handleMyCartDelete = (_id) => {
    fetch(`https://brand-shop-server-one-bice.vercel.app/mycart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const remainingBrand = myCartProducts.filter(
          (product) => product._id !== _id
        );
        setMyCartProducts(remainingBrand);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Items</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>CRUD</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCartProduct.map((product, idx) => (
              <tr key={product._id}>
                <td>{idx + 1}</td>
                <td>
                  {" "}
                  <img className="w-16" src={product.photoURL} alt="" />
                </td>
                <td>{product.productName}</td>
                <td>
                  <Link>
                    <button
                      onClick={() => handleMyCartDelete(product._id)}
                      className="btn btn-sm btn-warning"
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
