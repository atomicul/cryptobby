import { useParams } from "react-router";
import React from "react";
import RedirectTo from "./RedirectTo";
import Cookies from "js-cookie";

const SetKey = () => {
    const { key } = useParams();
    Cookies.set("key", key, { expires: 365, path: "/cryptobby" });
    return <RedirectTo path="/encrypt" />;
};

export default SetKey;
