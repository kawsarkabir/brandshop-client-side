import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = { email, password };
    console.log(loginUser);

    // login  with  email and password
    logIn(email, password)
    .then(result=> {
      console.log(result.user);
      Swal.fire({
        title: 'success!',
        text: 'Successfully create your account',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
    .then(error=>{
      console.log(error);
    })
    
  };
  return (
    <div className="hero h-[70vh]">
      <div className="w-2/4 mx-auto flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card mt-5  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none bg-[#FFBB38]">Login</button>
            </div>
            <h1>
              New to Here ?
              <Link to={"/register"} className="text-blue-800">
                Please Register
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
