import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ totalamount, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>Money Saved: <span className='amount'>{totalamount}</span></h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}ß
        />
      )}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
