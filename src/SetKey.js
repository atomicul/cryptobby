import { useNavigate, useParams } from "react-router";
import React, { useEffect } from "react";
import RedirectTo from "./RedirectTo";
import Cookies from "js-cookie";

const SetKey = () => {
    const { key } = useParams();
    Cookies.set("key", key, { expires: 365, path: "/" });
    return <RedirectTo path="/cryptobby/encrypt" />;
};

export default SetKey;
