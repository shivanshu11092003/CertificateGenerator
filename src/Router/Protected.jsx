import { useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Axios from "../Axios/Axios"

const Protected = ({ children }) => {
    // const user = useSelector(state => state.user.User)
    let location = useLocation()
    console.log(location)
    useEffect(() => {
        Axios("login/", "GET",).then((res) => {
            if (res.status == 200) {

            }
        })

    }, [])

    return <Navigate to={"/dashboard"} state={{ from: location }} replace />

}

export default Protected;