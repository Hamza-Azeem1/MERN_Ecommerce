import Logo from "./Logo"
import { GrSearch } from "react-icons/gr"
import { FaRegCircleUser } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import SummaryApi from "../common"
import { toast } from "react-toastify"
import { setUserDetails } from "../store/userSlice"
import { useState } from "react"

const Header = () => {

    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    const [menuDisplay, setMenuDisplay] = useState(false)

    const handleLogout = async () => {
        const fetchData = await fetch(SummaryApi.Logout_user.url, {
            method: SummaryApi.Logout_user.method,
            credentials: 'include'
        })

        const data = await fetchData.json()

        if (data.success) {
            toast.success(data.message)
            dispatch(setUserDetails(null))
        }

        if (data.error) {
            toast.error(data.message)
        }
    }

    return (
        <header className="h-16 shadow-md bg-white">
            <div className="h-full container mx-auto flex items-center px-4 justify-between">
                <div>
                    <Link to='/'>
                        <Logo w={90} h={50} />
                    </Link>
                </div>

                <div className="hidden lg:flex items-center w-full justify-between max-w-sm pl-4">
                    <input type="text" placeholder="search product here..." className="w-full outline-none pl-2 border rounded-full focus-within:shadow" />
                    <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer">
                        <GrSearch />
                    </div>
                </div>

                <div className="flex items-center gap-7">

                    <div className="relative flex justify-center">
                        <div className="text-3xl cursor-pointer relative flex justify-center" onClick={() => setMenuDisplay(prev => !prev)}>
                            {
                                user?.profilePic ? (
                                    <img src={user?.profilePic} className="w-10 h-10 rounded-full" alt={user?.name} />
                                ) : (

                                    <FaRegCircleUser />
                                )
                            }
                        </div>
                        {
                            menuDisplay && (
                                <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-md rounded">
                                    <nav>
                                        <Link to="/admin-panel" className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2" onClick={() => setMenuDisplay(prev => !prev)}>
                                            Admin Panel
                                        </Link>
                                    </nav>
                                </div>
                            )
                        }

                    </div>

                    <div className="text-2xl relative cursor-pointer">
                        <span>
                            <FaShoppingCart />
                        </span>

                        <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                            <p className="text-sm">0</p>
                        </div>

                    </div>

                    <div>
                        {
                            user?._id ? (
                                <button onClick={handleLogout} className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-800">Logout</button>
                            ) : (
                                <Link to='/login' className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-800">Login</Link>
                            )
                        }
                    </div>

                </div>
            </div>
        </header>
    )
}
export default Header