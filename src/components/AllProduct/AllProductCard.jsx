 

const AllProductCard = ({product}) => {
    console.log(product);
   const {productName, price, cetagory, photoURL} = product || {}
    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product image </th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Category</th>
              <th>CRUD</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={photoURL} alt=" product-img" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>{productName}</td>
              <td>${price}</td>
              <td>{cetagory}</td>
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