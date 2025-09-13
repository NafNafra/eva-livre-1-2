import React from 'react'
import QuoteForm from '../components/QuoteForm/index'
import QuoteList from '../components/QuoteList'
import useQuotes from '../hooks/useQuotes'
import './Home.scss'

function Home() {
  const { quotes, addQuote, likeQuote } = useQuotes()

  return (
    <div className="home">
      <h2>Mur de Citations</h2>
      <div className='content'>
        <QuoteList quotes={quotes} onLike={likeQuote} />
        <QuoteForm onAddQuote={addQuote} />
      </div>
    </div>
  )
}

export default Home
