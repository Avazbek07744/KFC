import img1 from '../assets/pen.svg'

const ItemCard = ({ image, name, description, price, onPriceClick }) => {
    return (
        <div className='cart shadow-[#d9d9d9]'>
            <img src={image} width={125} alt="" />
            <div className='py-4'>
                <h3 className='mb-2 text-[#2f322c] font-bold text-[16px]'>{name}</h3>
                <p className='w-[391px] line-clamp-2 mb-3'>{description}</p>
                <div className='flex gap-4'>
                    <button className='w-[75px] h-10 color-pink rounded-full'>
                        <img src={img1} width={30} className='mx-auto' alt="pen icon" />
                    </button>
                    <button
                        onClick={onPriceClick}
                        className='flex justify-center w-[150px] h-10 text-xl px-4 pt-1 button color-red border-red hover-b'
                    >
                        {price}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
