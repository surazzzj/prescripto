import { createContext, useEffect, useState, useCallback } from "react"
import { toast } from "react-toastify"
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState(
        localStorage.getItem('token') || ''
    )
    const [userData, setUserData] = useState(false)

    // Memoized doctors fetch (non-blocking)
    const getDoctosData = useCallback(async () => {
        if (doctors.length > 0) return

        try {
            const { data } = await axios.get(
                backendUrl + '/api/doctor/list'
            )

            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }, [backendUrl, doctors.length])

    // Memoized user profile fetch
    const loadUserProfileData = useCallback(async () => {
        if (!token) return

        try {
            const { data } = await axios.get(
                backendUrl + '/api/user/get-profile',
                { headers: { token } }
            )

            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }, [backendUrl, token])

    // Defer doctors fetch 
    useEffect(() => {
        const timer = setTimeout(() => {
            getDoctosData()
        }, 0)

        return () => clearTimeout(timer)
    }, [getDoctosData])

    // Load user profile after token is set 
    useEffect(() => {
        if (token) {
            setTimeout(() => {
                loadUserProfileData()
            }, 0)
        } else {
            setUserData(false)
        }
    }, [token, loadUserProfileData])

    const value = {
        doctors,
        getDoctosData,
        currencySymbol,
        backendUrl,
        token,
        setToken,
        userData,
        setUserData,
        loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
