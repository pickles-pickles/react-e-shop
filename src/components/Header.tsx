import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav
      className='navbar navbar-expand-sm
            navbar-dark px-sm-5
            '
    >
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            <span className=' mr-2 fas fa-home'>
              <i className='ml-1'> products</i>
            </span>
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <button>
          <span className=' mr-2 fas fa-cart-plus'>
            <i className='ml-1'> my cart</i>
          </span>
        </button>
      </Link>
    </nav>
  )
}

export default Header
