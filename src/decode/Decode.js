import { useParams } from "react-router-dom";
import NodeRSA from "node-rsa";
import Cookies from "js-cookie";
import React from "react";
import "./decode.scss";


const decrypt = (msg) => {
  const keyBase64 = Cookies.get("key");
  console.log(keyBase64);
  if (keyBase64 === undefined) return "Nu e pentru tine >_<";
  const key = new NodeRSA(Buffer.from(keyBase64, 'base64'), 'pkcs8-private-der');
  return key.decrypt(Buffer.from(msg, 'base64'), 'utf8');
};

const Decode = () => {
  const { msg } = useParams();
  console.log(Cookies.get("key"));
  console.log(Buffer.from(msg, 'base64').byteLength);
  return (
    <div className="decode">
      <h1>{decrypt(msg)}</h1>
    </div>
  );
};

export default Decode;
