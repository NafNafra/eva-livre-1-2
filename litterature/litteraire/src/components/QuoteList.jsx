import React from 'react'
import QuoteItem from './QuoteItem'

function QuoteList({ quotes, onLike }) {
  return (
    <div className="quote-list">
      {quotes.length === 0 ? (
        <p>Aucune citation pour le moment...</p>
      ) : (
        quotes.map((q, index) => (
          <QuoteItem key={index} quote={q} onLike={() => onLike(index)} />
        ))
      )}
    </div>
  )
}

export default QuoteList
