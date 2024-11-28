import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page ">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl mb-3 font-bold">Oops!</h1>
          <p className="text-2xl font-medium mb-3">Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <NavLink to="/" className="btn mt-2 border-primary/30  rounded-lg text-primary font-bold bg-[#FFFFFF] mb-6 px-8 hover:bg-primary hover:text-white">Back Home</NavLink >
      </div>
    </>
  );
}