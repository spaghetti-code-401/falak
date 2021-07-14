import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";
import { useTheme } from "../context/ThemeContext";
import useAPI from "../hooks/useAPI";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import ConsoleComponent from "./Console";

export default function CodeEditor({socket}) {
  const { glass2, lightText, glass } = useTheme();
  const API = useAPI();
  const { user } = useAuth();
  // const newMessage = useRef();
  const scrollRef = useRef();

  const {
    onlineUsers,
    setOnlineUsers,
    conversations,
    setConversations,
    currentConversation,
    setCurrentConversation,
    messages,
    setMessages,
    arrivalMessage,
    setArrivalMessage,
    newMessage,
    setNewMessage,
    chattingFriend,
    setChattingFriend,
    showEditor,
    setShowEditor,
    userCode,
    setUserCode,
    userCodeIncoming,
    setUserCodeIncoming
  } = useChat();
  const [renderConsole, setRenderConsole] = useState(false);

  function editorCodeOnChange(newValue) {
    setUserCode(newValue);
    // console.log(userCode)
  }

  function editorCodeOnInput(e) {
    // setUserCode(newValue);
    if (userCode !== userCodeIncoming) {
      console.log('input');
      try {
        socket.current.emit('sendCode', {
          senderId: user._id,
          receiverId: chattingFriend._id,
          text: userCode
        });
      } catch (e) {
        console.log('SOCKET::::::::::', e);
      }
    }
  }

  function handleResetCode() {
    setRenderConsole(false);
  }

  function handleRunCode() {
    handleResetCode();
    setTimeout(() => {
      setRenderConsole(true);
    }, 10);
  }

  return (
    <div className={`aceEditorContainer ${glass}`}>
      <button
        onClick={() => setShowEditor(false)}
        className={`backToChatButton ${lightText} ${glass2}`}>
        Back to chat
      </button>
      <AceEditor
        className={`${glass2}`}
        mode="javascript"
        theme="dracula"
        value={userCode}
        focus={true}
        onChange={editorCodeOnChange}
        onInput={editorCodeOnInput}
        // onCursorChange={onCursorChange}
        name="aceEditor"
        height="70%"
        width="100%"
        fontSize="16px"
        wrapEnabled={true}
        // enableBasicAutocompletion={true}
        // enableLiveAutocompletion={true}
        // enableSnippets={true}
        // showGutter={false}
        // editorProps={{ $blockScrolling: true }}
        style={{ borderRadius: '10px' }}
      />
      <div className={`console ${glass2}`}>
        <div className="consoleLeft">
          <button
            onClick={handleRunCode}
            className={`runCodeButton ${lightText} ${glass2}`}>
            run {'>'}
          </button>
          <button
            onClick={handleResetCode}
            className={`resetCodeButton ${lightText} ${glass2}`}>
            reset {'>'}
          </button>
        </div>
        <div className={`consoleRight ${glass2}`}>
          {renderConsole && (
            <ConsoleComponent
              userCode={userCode}
              renderConsole={renderConsole}
            />
          )}
        </div>
      </div>
    </div>
  );
}
