import React, { useEffect } from "react";
import MsgForm from "../components/Form/MsgForm";
import MsgTable from "../components/Table/MsgTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import "../App.css";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const getData = async () => {
    const {
      data: { messages: msgs },
    } = await axios.get(
      "https://message-phjc15g3s-a-padhy.vercel.app/api/v1/messages"
    );
    setMessages(msgs);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      <MsgForm getData={getData} />
      <MsgTable messages={messages} />
    </div>
  );
};

export default Home;
