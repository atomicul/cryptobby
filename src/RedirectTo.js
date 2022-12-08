import { useNavigate } from "react-router";
import { useEffect } from "react";


const Redirect = ({path}) => {
    const navigateTo = useNavigate();
    useEffect(() => {
        navigateTo(path);
    }, []);
}

export default Redirect;