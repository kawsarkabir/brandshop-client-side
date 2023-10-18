const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const addProducts = { productName, category, price, rating, details, photoURL };
    console.log(addProducts);

    fetch("http://localhost:5000/addproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProducts),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className=" bg-[#F4F3F0] p-20">
      <h1 className=" mb-8 lg:text-4xl shadow-sky-950 text-center font-bold">
        Add New Product
      </h1>
      <div className="justify-center flex">
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  name="productName"
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered join-item"
              >
                <option disabled selected>
                  Filter
                </option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Sony</option>
                <option value="">Google</option>
                <option value="">Inter</option>
                <option value="">Nokia</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  name="price"
                  type="text"
                  placeholder="Enter product price"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  name="rating"
                  type="text"
                  placeholder="Enter  your rating"
                  className="input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  name="details"
                  type="text"
                  placeholder="Enter  short description"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  name="photoURL"
                  type="text"
                  placeholder="Enter photo URL"
                  className="input input-bordered  "
                />
              </label>
            </div>
          </div>

          <button className="btn bg-[#FFBB38] w-full mt-10">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
