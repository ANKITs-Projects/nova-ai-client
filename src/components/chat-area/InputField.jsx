import { useRef, useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";

export default function InputField({setChatMessage , setIsSendMessage }) {
  const [value, setValue] = useState("");
  const [isTextarea, setIsTextarea] = useState(false);

  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  const measureRef = useRef(null);

  const cursorPosRef = useRef(0);
  const lockRef = useRef(false);

  const MAX_HEIGHT = 140;


  const handleSend = () => {
    if(!value) return
    setChatMessage(value)
    setValue("")
    setIsSendMessage(true)
  }

  // 🔥 Resize textarea
  const resizeTextarea = (el) => {
    el.style.height = "auto";
    const newHeight = Math.min(el.scrollHeight, MAX_HEIGHT);
    el.style.height = newHeight + "px";
    el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  };

  // 🔥 Check if text fits in input (using mirror)
  const fitsInInput = () => {
    
    if (!measureRef.current || !inputRef.current) return false;

    // const textWidth = measureRef.current.offsetWidth;
    const textWidth = value.length * 14
    const inputWidth = inputRef.current.clientWidth;
    
    return textWidth <= inputWidth - 8; // buffer
  };

  // ✅ Handle textarea typing
  const handleTextareaInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    resizeTextarea(el);

    const hasNewLine = el.value.includes("\n");
    
    if (!hasNewLine && fitsInInput() ) {
      cursorPosRef.current = el.selectionStart;
      setIsTextarea(false);
    }
  };

  // ✅ Handle Shift + Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey && !lockRef.current) {
      e.preventDefault();

      const el = inputRef.current;
      const start = el.selectionStart;
      const end = el.selectionEnd;

      const newValue =
        value.slice(0, start) + "\n" + value.slice(end);

      setValue(newValue);

      cursorPosRef.current = start + 1;

      lockRef.current = true;
      setIsTextarea(true);
    }
  };

  // ✅ Detect overflow (input → textarea)
  useEffect(() => {
    if (!inputRef.current || isTextarea || lockRef.current) return;

    const el = inputRef.current;

    if (el.scrollWidth > el.clientWidth + 8) {
      cursorPosRef.current = el.selectionStart;
      lockRef.current = true;
      setIsTextarea(true);
    }
  }, [value, isTextarea]);

  // ✅ Handle focus + cursor + initial resize
  useEffect(() => {
    if (isTextarea && textareaRef.current) {
      const el = textareaRef.current;

      el.focus();

      const pos = Math.min(cursorPosRef.current, el.value.length);
      el.selectionStart = pos;
      el.selectionEnd = pos;

      resizeTextarea(el);
    } else if (!isTextarea && inputRef.current) {
      const el = inputRef.current;

      el.focus();

      const pos = Math.min(cursorPosRef.current, el.value.length);
      el.selectionStart = pos;
      el.selectionEnd = pos;
    }
  }, [isTextarea]);

  return (
    <div className="w-full ">
      <div className="max-w-[65%] mx-auto bg-(--bgHover) rounded-4xl px-4 py-2 relative">
        
        {/* 🔥 Hidden mirror for measurement */}
        <span
          ref={measureRef}
          className="absolute invisible whitespace-pre"
          style={{
            fontSize: "14px",
            fontFamily: "inherit",
            fontWeight: "normal",
            letterSpacing: "normal",
          }}
        >
          {value}
        </span>

        {!isTextarea ? (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="w-full pr-9 bg-transparent outline-none text-white"
            style={{
              height: "28px",
              lineHeight: "20px"
            }}
          />
        ) : (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onInput={handleTextareaInput}
            placeholder="Type a message..."
            className="w-full pr-9 resize-none outline-none bg-transparent text-white"
            style={{
              height: "28px",
              maxHeight: "140px",
              overflowY: "hidden",
              lineHeight: "20px"
            }}
          />
        )}

        <div className="text-2xl absolute bottom-2.5 right-2.5" onClick={handleSend}>
          <IoSend />
        </div>
      </div>
    </div>
  );
}