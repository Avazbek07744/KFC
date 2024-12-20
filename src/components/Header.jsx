import { Link } from 'react-router-dom'
import img1 from "../assets/osh.svg"
import img2 from "../assets/fast-food.svg"
import img3 from "../assets/shirinlik.svg"
import img4 from "../assets/drink.svg"
import img5 from "../assets/osh2.svg"
import img6 from "../assets/fast-food2.svg"
import img7 from "../assets/drink2.svg"
import img8 from "../assets/shirinlik2.svg"

const Header = () => {
    return (
        <div className='bace-container h-24'>
            <div className='fixed flex justify-between w-[1400px] border-b-2 bg-white pt-4'>
                <div className='text-4xl font-bold w-[100px] h-[85px]'>
                    <Link to="/">Logo</Link>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <Link
                            id='link'
                            className='color-red px-8 text-white text-xl rounded-full border-red hover-b flex gap-3 items-center'
                            to='/milliytaomlar'>
                            <img className='img1' src={img1} width={30} alt="image" />
                            <img className='img2' src={img5} width={30} alt="image" />
                            Milliy taomlar
                        </Link>
                        <Link
                            id='link'
                            className='color-red px-8 text-white text-xl rounded-full border-red hover-b flex gap-3 items-center'
                            to='/fast-food'>
                            <img className='img1' src={img2} width={30} alt="image" />
                            <img className='img2' src={img6} width={30} alt="image" />
                            Fast Food
                        </Link>
                        <Link
                            id='link'
                            className='color-red py-1 px-8 text-white text-xl rounded-full border-red hover-b flex gap-3 items-center'
                            to='/ichimliklar'>
                            <img className='img1' src={img3} width={25} alt="image" />
                            <img className='img2' src={img7} width={25} alt="image" />
                            Ichimliklar
                        </Link>
                        <Link
                            id='link'
                            className='color-red px-8 text-white text-xl rounded-full border-red hover-b flex gap-3 items-center'
                            to='/shirinliklar'>
                            <img className='img1' src={img4} width={30} alt="image" />
                            <img className='img2' src={img8} width={30} alt="image" />
                            Shirinliklar
                        </Link>
                    </ul>
                </div>

                <div className="w-14 mr-4">
                    <select
                        className="block bg-black text-white w-full px-2 py-1 pb-2 border rounded-full shadow-md focus:outline-none focus:ring-blue-500"
                    >
                        <option className='uppercase' value="uz">uz</option>
                        <option className='uppercase' value="en">en</option>
                        <option className='uppercase' value="ru">ru</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header
