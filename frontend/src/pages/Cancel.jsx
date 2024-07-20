import { Link } from "react-router-dom"
import cancelImage from '../assets/cancel.gif'

const Cancel = () => {
    return (
        <div className='bg-slate-200 w-full max-w-md mx-auto flex items-center justify-center flex-col p-4 m-2 rounded'>
            <img src={cancelImage} width={150} height={150} alt="payment success" />
            <p className='text-red-600 font-bold text-lg'>Payment Cancelled</p>
            <Link to={'/cart'} className='p-2 px-3 mt-5 border-2 border-red-600 text-red-600 hover:bg-red-700 hover:text-white rounded font-semibold'>Go To Cart</Link>
        </div >
    )
}
export default Cancel