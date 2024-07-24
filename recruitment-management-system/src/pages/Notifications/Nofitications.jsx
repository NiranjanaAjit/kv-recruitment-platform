import { jwtDecode } from "jwt-decode";
import { useGetNotificationsQuery } from "../../api/notificationApi";

const Notifications = () =>{
    const token = localStorage.getItem("accessToken")
    const decoded = jwtDecode(token)
    console.log(decoded)
    const {data} = useGetNotificationsQuery();  
    console.log(data)
    const notifications = data?.notifications;
    const messages = notifications?.map((notification)=> notification.message)
    console.log(messages)
    return <div>
        {messages}

    </div>
};

export default Notifications;