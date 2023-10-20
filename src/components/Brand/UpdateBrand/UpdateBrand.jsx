import { useLoaderData } from "react-router-dom";

const UpdateBrand = () => {
  const loadedBrand = useLoaderData();

  const handleUpdateBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value;
    const brandURL = form.brandURL.value;
    const brand = {
      brandName,
      brandURL,
    };
    console.log(brand);
    /*  fetch("https://brand-shop-server-one-bice.vercel.app", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(brand),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
           alert('brand added')
        }); */
  };
  return (
    <div className=" bg-[#F4F3F0] p-20">
      <h1 className=" mb-8 lg:text-4xl shadow-sky-950 text-center font-bold">
        Update Your Brand
      </h1>
      <div className="justify-center flex">
        <form onSubmit={handleUpdateBrand}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <select
                name="brandName"
                className="select select-bordered join-item"
              >
                <option disabled selected>
                  Filter
                </option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Sony</option>
                <option>Google</option>
                <option>Intel</option>
                <option>Nokia</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  name="brandURL"
                  type="text"
                  placeholder="Enter brand logo URL"
                  className="input input-bordered  "
                />
              </label>
            </div>
          </div>

          <button className="btn bg-[#FFBB38] w-full mt-10">
            Update Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBrand;
