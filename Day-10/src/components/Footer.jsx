import useOnlineOffline from "../utils/useOnlineOffline";

const Footer = ()=>{

    const onlineStatus = useOnlineOffline()


    return(
        <footer>
        <div className="footer">
        <h1>Footer</h1>
        <span>{onlineStatus? "📶- Online" : "📶- Offline" }</span>
       </div>
        </footer>
    )
}
export default Footer;
