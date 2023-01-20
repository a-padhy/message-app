import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMessage = () => {
  const { id } = useParams();
  const [msg, setMsg] = useState("");
  useEffect(() => {
    async function getMessage() {
      try {
        const {
          data: {
            message: { value: msgVal },
          },
        } = await axios.get(`http://localhost:5000/api/v1/messages/${id}`);
        setMsg(msgVal);
      } catch (error) {
        console.log(error);
      }
    }
    getMessage();
  }, [id]);
  return <div>{msg}</div>;
};

export default SingleMessage;
