"use client";
// import { Metadata } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: `Login | `,
//     description: `Login to Nouris El Bahr`,
//   };
// }
const Login = () => {
  const { userId } = useParams<{ userId: string }>();
  return (
    <div className="relative flex h-screen w-full flex-col lg:flex-row">
      <div className="relative block h-[30%] w-full lg:hidden lg:w-1/2">
        <span className="absolute top-0 h-full w-full rounded-b-full bg-primary p-24">
          <svg
            viewBox="0 0 157 62"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primaryBrown"
          >
            <path d="M10.1562 39.6562H28.5625V49H0.21875V4.84375H10.1562V39.6562ZM48.5312 49.7812C43.5104 49.7812 39.3125 48.1458 35.9375 44.875C32.5833 41.6042 30.9062 37.5417 30.9062 32.6875C30.9062 27.8333 32.5833 23.7708 35.9375 20.5C39.3125 17.2292 43.5104 15.5938 48.5312 15.5938C51.8438 15.5938 54.8438 16.3438 57.5312 17.8438C60.2188 19.3229 62.3229 21.375 63.8438 24C65.3646 26.6042 66.125 29.5 66.125 32.6875C66.125 35.875 65.3646 38.7812 63.8438 41.4062C62.3229 44.0104 60.2188 46.0625 57.5312 47.5625C54.8438 49.0417 51.8438 49.7812 48.5312 49.7812ZM42.8125 38.4375C44.3333 39.9792 46.2396 40.75 48.5312 40.75C50.8229 40.75 52.7292 39.9792 54.25 38.4375C55.7708 36.8958 56.5312 34.9792 56.5312 32.6875C56.5312 30.3958 55.7708 28.4792 54.25 26.9375C52.7292 25.3958 50.8229 24.625 48.5312 24.625C46.2396 24.625 44.3333 25.3958 42.8125 26.9375C41.2917 28.4792 40.5312 30.3958 40.5312 32.6875C40.5312 34.9792 41.2917 36.8958 42.8125 38.4375ZM92.25 48.6875C95.5625 48.6875 98.3229 49.5521 100.531 51.2812C102.74 53.0312 104.146 55.4688 104.75 58.5938L95.1562 61.2188C95.0312 60.1562 94.5417 59.3021 93.6875 58.6562C92.8542 58.0312 91.7812 57.7188 90.4688 57.7188H80.2812C77.1146 57.7188 74.5729 56.8854 72.6562 55.2188C70.7604 53.5521 69.8125 51.3542 69.8125 48.625C69.8125 46.875 70.2083 45.2396 71 43.7188C71.8125 42.1771 72.9062 40.9896 74.2812 40.1562C71.4271 37.4271 70 34.0417 70 30C70 25.875 71.4583 22.4479 74.375 19.7188C77.3125 16.9688 80.9896 15.5938 85.4062 15.5938C87.7812 15.5938 90.0625 16.0417 92.25 16.9375C92.7292 15.1667 93.7396 13.7708 95.2812 12.75C96.8438 11.7083 98.7396 11.1875 100.969 11.1875H103.719V19.8125H101.406C100.635 19.8125 99.9688 20 99.4062 20.375C98.8438 20.7292 98.4896 21.2083 98.3438 21.8125C100.052 24.2917 100.906 27.0208 100.906 30C100.906 34.125 99.4271 37.5625 96.4688 40.3125C93.5104 43.0417 89.8229 44.4062 85.4062 44.4062C83.7604 44.4062 82.1667 44.1875 80.625 43.75C79.6458 44.375 79.1562 45.2083 79.1562 46.25C79.1562 46.9792 79.4271 47.5729 79.9688 48.0312C80.5104 48.4688 81.2188 48.6875 82.0938 48.6875H92.25ZM85.4062 24.4375C83.7188 24.4375 82.3229 24.9688 81.2188 26.0312C80.1354 27.0729 79.5938 28.3958 79.5938 30C79.5938 31.5833 80.1458 32.9062 81.25 33.9688C82.3542 35.0312 83.7396 35.5625 85.4062 35.5625C87.0729 35.5625 88.4688 35.0312 89.5938 33.9688C90.7396 32.9062 91.3125 31.5833 91.3125 30C91.3125 28.4167 90.7396 27.0938 89.5938 26.0312C88.4688 24.9688 87.0729 24.4375 85.4062 24.4375ZM112.312 12.1875C110.688 12.1875 109.323 11.6458 108.219 10.5625C107.115 9.45833 106.562 8.08333 106.562 6.4375C106.562 4.8125 107.115 3.45833 108.219 2.375C109.323 1.29167 110.688 0.75 112.312 0.75C113.979 0.75 115.365 1.29167 116.469 2.375C117.594 3.45833 118.156 4.8125 118.156 6.4375C118.156 8.08333 117.594 9.45833 116.469 10.5625C115.365 11.6458 113.979 12.1875 112.312 12.1875ZM107.656 49V16.375H117V49H107.656ZM143.656 15.5938C147.406 15.5938 150.427 16.7292 152.719 19C155.01 21.25 156.156 24.25 156.156 28V49H146.812V31.1562C146.812 29.1771 146.229 27.5938 145.062 26.4062C143.917 25.2188 142.385 24.625 140.469 24.625C138.469 24.625 136.844 25.2396 135.594 26.4688C134.365 27.6771 133.75 29.2812 133.75 31.2812V49H124.406V16.375H133.75V19.625C136.375 16.9375 139.677 15.5938 143.656 15.5938Z" />
          </svg>
        </span>
        <Image
          src="/Assets/Images/Common/login-avatar.png"
          alt="Avatar"
          className="absolute -bottom-[10px] right-0 z-20"
          width={229}
          height={250}
        />
      </div>

      <form className="z-10 flex flex-grow flex-col items-center justify-around px-10">
        <div className="lg:w-1/2">
          <div className="mb-4">
            <label className="mb-1 block font-medium text-gray-700">
              Email
            </label>
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
                className="ml-2 flex-1 bg-transparent text-gray-700 outline-none lg:h-10"
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
                <path d="M10 2a6 6 0 00-6 6v2a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2V8a6 6 0 00-6-6zM6 8a4 4 0 118 0v2H6V8z" />
              </svg>
              <input
                type="password"
                className="ml-2 flex-1 bg-transparent text-gray-700 outline-none lg:h-10"
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
        </div>

        <div className="lg:w-1/2">
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
                src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20210618182605%21Google_%22G%22_logo.svg"
                alt="Google"
                className="w-8"
                width={32}
                height={32}
              />
            </button>
            <button>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                alt="Facebook"
                className="w-8"
                width={32}
                height={32}
              />
            </button>
            <button>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-8"
                width={32}
                height={32}
              />
            </button>
          </div>
          <p className="text-black">{userId}</p>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="font-semibold text-orange-600">
              Sign up
            </a>
          </p>
        </div>
      </form>
      <div className="flex h-screen w-1/2 justify-end pr-20 pt-[5%] max-lg:hidden">
        
        <span className="relative flex h-full w-1/2 items-center rounded-t-full bg-primary">
          <Image
            src="/Assets/Images/Common/login-avatar-1000x916.png"
            alt="Avatar"
            // className="absolute -left-40"
            className="absolute -inset-x-40"
            width={1000}
            height={916}
          />
        </span>
      </div>
    </div>
  );
};

export default Login;
