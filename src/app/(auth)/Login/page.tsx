import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Login | `,
    description: `Login to Nouris El Bahr`,
  };
}
const Login = () => {
  return (
    <div className="relative flex h-screen w-full flex-col justify-center lg:flex-row">
    <span className="absolute h-60 w-full rounded-b-full bg-primary"></span>
    <form className="z-10">
      <div className="mb-4">
        <label className="mb-1 block font-medium text-gray-700">Email</label>
        <div className="flex items-center rounded-full border border-gray-400 px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 10.382l7.997-4.498A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4.5-8-4.5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <input
            type="email"
            className="ml-2 flex-1 bg-transparent text-gray-700 outline-none"
            placeholder="email@gmail.com"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-1 block font-medium text-gray-700">
          Password
        </label>
        <div className="flex items-center rounded-full border border-gray-400 px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              
              d="M10 2a6 6 0 00-6 6v2a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2V8a6 6 0 00-6-6zM6 8a4 4 0 118 0v2H6V8z"
              
            />
          </svg>
          <input
            type="password"
            className="ml-2 flex-1 bg-transparent text-gray-700 outline-none"
            placeholder="Enter your password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 4c-4.418 0-8 3.134-8 7s3.582 7 8 7 8-3.134 8-7-3.582-7-8-7zM2 11c.82 1.642 2.9 3 8 3s7.18-1.358 8-3c-.82-1.642-2.9-3-8-3s-7.18 1.358-8 3z" />
            <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </div>
      </div>

      <div className="mb-6 text-right">
        <a href="#" className="text-sm font-medium text-gray-600">
          Forgot Password
        </a>
      </div>

      <button className="text-brown-700 w-full rounded-full bg-orange-200 py-3 font-semibold shadow-md">
        Login
      </button>

      <div className="my-6 flex items-center">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">- or -</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center gap-6">
        <button>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
            alt="Google"
            className="w-8"
          />
        </button>
        <button>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            alt="Facebook"
            className="w-8"
          />
        </button>
        <button>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-8"
          />
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <a href="#" className="font-semibold text-orange-600">
          Sign up
        </a>
      </p>
    </form>
    
  </div>
  );
};

export default Login;
