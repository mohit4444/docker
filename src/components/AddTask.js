import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [item, setItem] = useState('')
  const [amount, setAmount] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!item) {
      alert('Please add an item')
      return
    }

    onAdd({ item, amount})

    setItem('')
    setAmount('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Item</label>
        <input
          type='text'
          placeholder='Add Item'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Amount</label>
        <input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <input type='submit' value='Save item' className='btn btn-block' />
    </form>
  )
}

export default AddTask
