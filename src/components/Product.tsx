type Props = {
  title: string
  price: number
  img: string
}

const Product = ({ title, price, img }: Props) => {
  return (
    <div className='col-6'>
      <div className='img-container'>
        <img src={img} alt='product' className='card-img-top p-2'></img>
      </div>
      <h4 className='mx-4'>{title}</h4>
      <p className='mx-4'>{price} &euro;</p>
    </div>
  )
}

export default Product
