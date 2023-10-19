const AllBrandCard = ({brand}) => {
    console.log(brand);
    const {brandURL, brandName} = brand || {}

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="flex justify-around">
              <td>
                <div>
                  <div>
                    <div className="w-40 h-40">
                      <img src={brandURL} alt=" product-img" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{brandName}</td>
             
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

export default AllBrandCard;
