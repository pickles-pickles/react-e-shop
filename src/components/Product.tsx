type Props = {
  title: string
  price: number
  img: string
}

const Product = ({ title, price, img }: Props) => {
  return (
    <div className='card-an col-12 '>
      <div className='card-an img-container'>
        <img src={img} alt='product' className='card-an card-img-top p-2'></img>
      </div>
      <div className='card-an product-main'>
        <h4 className='mx-2 mx-md-0 mx-lg-3 '>{title}</h4>
        <p className='mx-2 mx-md-0 mx-lg-3'>{price} &euro;</p>
      </div>
    </div>
  )
}

export default Product
