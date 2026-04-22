import { useDispatch } from "react-redux";
import {
  popMessages,
  pushMessages,
  setMessageError,
  setMessageLoading,
} from "../slice/messageSlice";
import { postMessage } from "../api/chat.api";

const useSendGeneralChatMessage = () => {
  const dispatch = useDispatch();

  const sendGeneralChatMessage = async (message, chatId = null) => {
    console.log("sendgeneral hook:- ", message);
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
      const res = await postMessage(message, chatId);
      dispatch(popMessages());
      if (Array.isArray(res.messages)) {
        console.log("If array:- " ,res.messages)
        dispatch(pushMessages(res.messages));
      } else {
        console.warn("messages is not array:", res.messages);
      }

      dispatch(setMessageError(null));
      console.log(res.detail);
      console.log(res.messages);
      chatDetail = res.detail;
    } catch (error) {
      console.log(error);
      dispatch(setMessageError(error.message));
    } finally {
      dispatch(setMessageLoading(false));
    }

    return chatDetail;
  };

  return sendGeneralChatMessage;
};

export default useSendGeneralChatMessage;
