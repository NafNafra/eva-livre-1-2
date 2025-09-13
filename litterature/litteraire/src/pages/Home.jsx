import React from 'react'
import QuoteForm from '../components/QuoteForm'
import QuoteList from '../components/QuoteList'
import useQuotes from '../hooks/useQuotes'

function Home() {
  const { quotes, addQuote, likeQuote } = useQuotes()

  return (
    <div className="home">
      <h1>Mur de Citations</h1>
      <QuoteForm onAddQuote={addQuote} />
      <QuoteList quotes={quotes} onLike={likeQuote} />
    </div>
  )
}

export default Home
