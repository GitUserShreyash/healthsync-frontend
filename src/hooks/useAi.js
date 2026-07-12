import { useState } from 'react'

export default function useAi() {
  const [messages, setMessages] = useState([])

  const addMessage = (message) => {
    setMessages((currentMessages) => [...currentMessages, message])
  }

  return { messages, setMessages, addMessage }
}
