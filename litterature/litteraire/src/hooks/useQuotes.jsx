import { useState, useEffect } from "react"
import { io } from "socket.io-client"

// connecte au serveur
const socket = io("http://localhost:3000")

function useQuotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    // init
    socket.on("init", (data) => setQuotes(data))
    socket.on("updateQuotes", (data) => setQuotes(data))

    return () => {
      socket.off("init")
      socket.off("updateQuotes")
    }
  }, [])

  const addQuote = ({ name, quote }) => {
    socket.emit("newQuote", { name, quote })
  }

  const likeQuote = (index) => {
    socket.emit("likeQuote", index)
  }

  return { quotes, addQuote, likeQuote }
}

export default useQuotes
