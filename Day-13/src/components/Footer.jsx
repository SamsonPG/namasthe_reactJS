import UserContext from "../utils/UserContext";
import SamContext from "../utils/SamContext";
import useOnlineOffline from "../utils/useOnlineOffline";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(UserContext);
  const { user2, setUserSam } = useContext(SamContext);

  const onlineStatus = useOnlineOffline();

  return (
    <footer className="bg-amber-400 shadow-md w-full flex justify-center items-center p-5">
    
      <div className="flex flex-col items-center">
      <div className="flex "> <span className="m-2"><input 
          value={user2.name}
          onChange={(e) => {
            setUserSam({...user2, name: e.target.value });
          }}
        ></input>Name</span>
           <span className="m-2"><input
          value={user2.email}
          onChange={(e) => {
            setUserSam({...user2, email: e.target.value });
          }}
        ></input>Email</span>
        <span className="m-2"><input
          value={user2.name}
          onChange={(e) => {
            setUserSam({name: e.target.value });
          }}
        ></input>Again Name</span></div>
       
        <span className="font-bold mr-4">{user2.name}</span>
        <span className="font-bold mr-4">{user2.email}</span>
        <h1 className="mr-4">Website Developed By</h1>
        <div>
          <span className="font-bold mr-4">{user.name}</span>
          <span className="font-bold mr-4">{user.email}</span>
        </div>
        <span>{onlineStatus ? "📶- Online" : "📶- Offline"}</span>
      </div>
    </footer>
  );
};
export default Footer;
