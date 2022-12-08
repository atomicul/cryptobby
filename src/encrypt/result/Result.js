import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import publicKey from "./pbKey";
import NodeRSA from "node-rsa";
import QRC from "qrcode";
import "./result.scss";

const encrypt = (msg) => {
  const keyBase64 = publicKey;
  const key = new NodeRSA(Buffer.from(keyBase64, "base64"), "pkcs8-public-der");
  return (
    "https://atomicul.github.io/cryptobby/msg/" +
    // "http://localhost:3000/cryptobby/msg/" +
    encodeURIComponent(key.encrypt(Buffer.from(msg), "base64"))
  );
};

const getQr = (text, setter) => {
  QRC.toDataURL(text, (err, url) => {
    if (err) {
      console.log(err);
    } else setter(url);
  });
};

const copyToClipboard = (msg) => {
  navigator.clipboard.writeText(msg);
};

const Result = ({ text, render }) => {
  const [encrypted, setEncrypted] = useState(null);
  const [qr, setQr] = useState("");
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleClick = () => {
    copyToClipboard(encrypted);
    setOpenTooltip(true);
  };

  useEffect(() => {
    setEncrypted(encrypt(text));
  }, [render]);

  useEffect(() => {
    getQr(encrypted, setQr);
    console.log(encrypted);
  }, [encrypted]);

  useEffect(() => {
    let timeout;
    if (openTooltip) {
      timeout = setTimeout(() => {
        setOpenTooltip(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openTooltip]);

  return (
    <div className="result">
      <a href={qr} download="encrypted-qr.png">
        <img src={qr} />
      </a>
      <Tooltip
        open={openTooltip}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Copied"
      >
        <Button variant="contained" fullWidth onClick={handleClick}>
          Copy Link
        </Button>
      </Tooltip>
    </div>
  );
};

export default Result;
