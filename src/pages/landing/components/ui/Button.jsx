import { useNavigate } from "react-router-dom";

export const Button = ({url, text, className}) => {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate(url)}
            className={`px-8 py-2.5 cursor-pointer text-xs font-bold tracking-widest uppercase rounded-full text-white transition ${className}`}
        >
            {text}
        </button>
    );
}