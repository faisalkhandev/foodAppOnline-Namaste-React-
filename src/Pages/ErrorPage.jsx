import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error("Error:", error?.statusText || error?.message);

    const errorMessage = error?.statusText || error?.message || "Something went wrong, please try again later.";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img
                src="https://img.freepik.com/free-vector/comic-speech-bubble-with-oops-text_1308-53484.jpg"
                alt="Error"
                className="max-w-sm mb-6 mix-blend-multiply"
            />
            <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-lg text-gray-700 mb-2">
                Oops, an error has occurred.
            </p>
            <p className="text-md text-gray-500 italic mb-6">
                {errorMessage}
            </p>
            <button
                className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                onClick={() => navigate("/")}
            >
                Go to Home
            </button>
        </div>
    );
};

export default ErrorPage;
