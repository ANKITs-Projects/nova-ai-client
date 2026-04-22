import { useDispatch } from "react-redux";
import {
  popMessages,
  pushMessages,
  setMessageError,
  setMessageLoading,
} from "../slice/messageSlice";
import { postMessage } from "../api/chat.api";

const useSendMessage = () => {
  const dispatch = useDispatch();

  const sendMessage = async (message, chatId = null, projectId = null) => {
    
    let chatDetail = null;
    const messageObj = [
      {
        sender: "user",
        content: message,
      },
    ];
    dispatch(setMessageLoading(true));

    try {
      dispatch(pushMessages(messageObj));
      const res = await postMessage(message, chatId, projectId);
      dispatch(popMessages());
      if (Array.isArray(res.messages)) {
        
        dispatch(pushMessages(res.messages));
      } else {
        console.warn("messages is not array:", res.messages);
      }

      dispatch(setMessageError(null));
      
      chatDetail = res.detail;
    } catch (error) {
      console.log(error);
      dispatch(setMessageError(error.message));
    } finally {
      dispatch(setMessageLoading(false));
    }

    return chatDetail;
  };

  return sendMessage;
};

export default useSendMessage;
