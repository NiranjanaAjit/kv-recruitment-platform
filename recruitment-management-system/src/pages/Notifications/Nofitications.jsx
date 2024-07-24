import { useEffect, useState } from "react";
import { useGetNotificationsQuery } from "../../api/notificationApi";
import "./Notifications.scss";

const Notifications = () => {

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

    return (
        <div className="notifications-container">
          {messages?.map((message, index) => (
            <div key={index} className="notification-message">
              {message}
            </div>
          ))}
        </div>
      );
};

export default Notifications;
