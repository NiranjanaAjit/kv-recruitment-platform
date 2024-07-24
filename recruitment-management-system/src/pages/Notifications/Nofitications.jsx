import { useEffect, useState } from "react";
import { useGetNotificationsQuery } from "../../api/notificationApi";

const Notifications = () => {
  // const [test, setTest] = useState(0);
  // setTimeout(()=>{
  //     setTest(test+1);
  // },1000*10)
  const [messages, setMessages] = useState("");
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const token = localStorage.getItem("accessToken");
  setInterval(async () => {
    // const { data } = useGetNotificationsQuery({});
    try {
      const res = await fetch("http://localhost:3000/notifications", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      console.log("data:", data);
      const notifications = data?.notifications;
      // console.log(notifications);
      setMessages(notifications?.map((notification) => notification.message));
    //   console.log("hello from test");
    } catch (err) {
      console.error(err);
    }
  }, 10000);
  return <div>{messages}</div>;
};

export default Notifications;
