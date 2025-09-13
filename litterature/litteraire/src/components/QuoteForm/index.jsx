import React, { useState } from 'react'

import './QuoteForm.scss'

function QuoteForm({ onAddQuote }) {
  const [name, setName] = useState('')
  const [quote, setQuote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && quote.trim()) {
      onAddQuote({ name, quote })
      setName('')
      setQuote('')
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <h3>Saisisser votre citation</h3>
      <input 
        type="text" 
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
      />
      <textarea 
        placeholder="Votre citation..."
        rows="3"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        required 
      />
      <button type="submit">Publier</button>
    </form>
  )
}

export default QuoteForm
