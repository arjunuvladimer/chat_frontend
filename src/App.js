import socketClient from 'socket.io-client'
import Chat from './chat/Chat'
const SERVER = "http://localhost:8080"

function App() {

  let socket = socketClient(SERVER)
  socket.on('connection', () => {
    console.log('I am connected with the backend')
  })
  return (
    <>
      <Chat />
    </>
  );
}

export default App;
