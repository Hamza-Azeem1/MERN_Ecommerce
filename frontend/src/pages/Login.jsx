import { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section id="login">
            <div className="mx-auto container p-4">
                <div className="bg-white p-5 w-full max-w-sm mx-auto">
                    <div className='w-20 h-20 mx-auto '>
                        <img src={loginIcons} alt="login icons" />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email: </label>
                            <div className='bg-slate-200 p-2 rounded-lg'>
                                <input type="email"
                                    placeholder='example@domain.com'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password: </label>
                            <div className='bg-slate-200 p-2 rounded-lg flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter You Password'
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)
                                }>
                                    <span>
                                        {
                                            showPassword ? (
                                                < FaEyeSlash />

                                            ) : (

                                                <FaEye />
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to="/forgot-password" className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot Password?</Link>
                        </div>

                        <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Login</button>

                    </form>

                    <p className='my-4'>Don&apos;t have an account? <Link to="/sign-up" className='text-red-600 hover:text-red-700 hover:underline'>Sign Up</Link> </p>

                </div>
            </div>
        </section>
    )
}
export default Login