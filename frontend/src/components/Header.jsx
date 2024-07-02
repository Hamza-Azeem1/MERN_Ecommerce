import Logo from "./Logo"
import { GrSearch } from "react-icons/gr"
import { FaRegCircleUser } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
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

                    <div className="text-3xl cursor-pointer">
                        <FaRegCircleUser />
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
                        <Link to='/login' className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-800">Login</Link>
                    </div>

                </div>
            </div>
        </header>
    )
}
export default Header