import {createContext} from "react";

const SamContext= createContext({
    user2:{
        name :"DummyDummy Name",
        email:"DummyDummy Email"
    }
})

SamContext.displayName = "SamContext"

export default SamContext;