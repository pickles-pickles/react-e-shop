type Props = {
  title: string
  price: number
  img: string
}

const Product = ({ title, price, img }: Props) => {
  return (
    <div className='col-12'>
      <div className='img-container'>
        <img src={img} alt='product' className='card-img-top p-2'></img>
      </div>
      <div className='product-main'>
        <h4 className='mx-2 mx-md-0 mx-lg-4 '>{title}</h4>
        <p className='mx-2 mx-md-0 mx-lg-4'>{price} &euro;</p>
      </div>
    </div>
  )
}

export default Product
