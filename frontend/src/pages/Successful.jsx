import { Link } from 'react-router-dom'
import successImage from '../assets/success.gif'

const Successful = () => {
    return (
        <div className='bg-slate-200 w-full max-w-md mx-auto flex items-center justify-center flex-col p-4 m-2 rounded'>
            <img src={successImage} width={150} height={150} alt="payment success" />
            <p className='text-green-600 font-bold text-lg'>Payment Successfull</p>
            <Link to={'/order'} className='p-2 px-3 mt-5 border-2 border-green-600 text-green-600 hover:bg-green-700 hover:text-white rounded font-semibold'>See Order</Link>
        </div >
    )
}
export default Successful