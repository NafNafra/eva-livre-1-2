import React from 'react'

function QuoteItem({ quote, onLike }) {
  return (
    <div className="quote-item">
      <div className="author">{quote.name} dit :</div>
      <div className="text">“{quote.quote}”</div>
      <button className="like-btn" onClick={onLike}>
        👍 {quote.likes}
      </button>
    </div>
  )
}

export default QuoteItem
