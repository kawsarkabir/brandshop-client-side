const AllProductCard = ({ product }) => {
  console.log(product);
  const { productName, price, category, photoURL } = product || {};
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="flex justify-around items-center">
              <td>
                <div>
                  <div>
                    <div className="w-40 h-40">
                      <img src={photoURL} alt=" product-img" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{productName}</td>
              <td>${price}</td>
              <td>{category}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
                <button className="btn btn-ghost btn-xs">Update</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductCard;
