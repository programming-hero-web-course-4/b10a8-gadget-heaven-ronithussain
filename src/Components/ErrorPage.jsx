import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page ">
      <div className="flex flex-col items-center">
      <h1 className="text-5xl mb-3 font-bold">Oops!</h1>
      <p className="text-2xl font-medium mb-3">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
}