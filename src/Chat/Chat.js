import './Chat.css';
const openForm = () =>{
    document.getElementById("myForm").style.display = "block";
}
const closeForm = () =>{
    document.getElementById("myForm").style.display = "none";
}

function Chat() {
    
  return (
    <div>
    <button className="open-button" onClick={openForm}>Chat</button>
    <div className="chat-popup" id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Chast</h1>
    
        <label htmlFor="msg"><b>Message</b></label>
        <textarea placeholder="Type message.." name="msg" required></textarea>
    
        <button type="submit" className="btn">Send</button>
        <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
      </form>
    </div>
  </div>
  );
}

export default Chat;
