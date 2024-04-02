import useOnlineOffline from "../utils/useOnlineOffline";

const Footer = ()=>{

    const onlineStatus = useOnlineOffline()


    return(
        <footer className=" bg-amber-400 shadow-mt  w-full flex justify-center p-5 mx-auto">
        <div className=" flex justify-center">
        <h1>Footer</h1>
        <span>{onlineStatus? "📶- Online" : "📶- Offline" }</span>
       </div>
        </footer>
    )
}
export default Footer;
