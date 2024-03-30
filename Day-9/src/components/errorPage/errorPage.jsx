import { useRouteError} from "react-router-dom"

const errorPage= ()=>{

    const err = useRouteError();
const {status,statusText} = useRouteError();
    return(
        <div>
        <h1>`Oops! {status} error`</h1>
        <h2>Something Went Wrong</h2>
        <h1>{err.status + " : " + err.statusText}</h1>
        </div>
    )
}
export default errorPage;