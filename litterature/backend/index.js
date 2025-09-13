import express from "express"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express()
const server = http.createServer(app)

// autoriser le front (vite dev par défaut http://localhost:5173)
const io = new Server(server, {
  cors: { origin: "http://localhost:5173" }
})

let quotes = [
  { quote: "Stay hungry, stay foolish.", name: "Steve Jobs", likes: 5 },
  { quote: "Life is what happens when you're busy making other plans.", name: "John Lennon", likes: 2 },
  { quote: "Do or do not. There is no try.", name: "Yoda", likes: 5 }
]

io.on("connection", (socket) => {
  console.log("Un utilisateur est connecté")

  // envoyer les citations actuelles à ce client
  socket.emit("init", quotes)

  // nouvelle citation
  socket.on("newQuote", (data) => {
    quotes.unshift({ ...data, likes: 0 })
    io.emit("updateQuotes", quotes) // broadcast
  })

  // like
  socket.on("likeQuote", (index) => {
    if (quotes[index]) {
      quotes[index].likes++
      io.emit("updateQuotes", quotes)
    }
  })

  socket.on("disconnect", () => {
    console.log("Un utilisateur s'est déconnecté")
  })
})

server.listen(3000, () => {
  console.log("✅ Serveur Socket.IO lancé sur http://localhost:3000")
})
