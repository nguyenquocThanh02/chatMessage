import React, { useEffect, useRef } from "react";

const ChatBox: React.FC = () => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <section>
      <div className="overflow-y-scroll h-[506px] p-2">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>

        <div ref={endRef}></div>
      </div>

      <div className="w-full">
        <label className="input input-bordered flex items-center">
          <input type="text" className="grow" placeholder="Search" />
          <button className="hover:text-greenLight text-[17px]">Send</button>
        </label>
      </div>
    </section>
  );
};

export default ChatBox;
