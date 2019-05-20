import React from 'react'
import { Link , BrowserRouter} from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <BrowserRouter>
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/wrap'>Wrap function</Link></li>

      </ul>
    </nav>
  </header>
  </BrowserRouter>
)

export default Header
