"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import AxiosInstance from "./AxiosInstance";
import ReactMarkdown from "react-markdown";
import Loader from "./Loader";

interface ChatMessage {
    type: "user" | "support";
    content: string;
}

export default function ChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { type: "support", content: "👋 Hello! How can I help you today?" }
    ]);

    const chatEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom on new messages
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleSend = async () => {
        if (message.trim() === "") return;

        // Add user message
        setMessages(prev => [...prev, { type: "user", content: message }]);
        setLoading(true);
        setMessage("");

        try {
            const { data } = await AxiosInstance.post("/boot", { message });

            // Add API response as support message
            setMessages(prev => [
                ...prev,
                { type: "support", content: data.data } // use data.data from API
            ]);
        } catch (err) {
            console.error(err);
            setMessages(prev => [
                ...prev,
                { type: "support", content: "❌ Something went wrong!" }
            ]);
        }

        setLoading(false);
    };

    return (
        <div className="fixed bottom-22 right-6 z-50">
            {/* Floating button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary transition"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/* Chatbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bottom-16 right-0 w-80 h-96 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-primary text-white p-3 flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Chat Support</h2>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat body */}
                        <div className="flex-1 p-4 overflow-y-auto text-gray-700 space-y-3 flex flex-col
                            scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`p-2 rounded-lg max-w-[80%] break-words ${msg.type === "user"
                                            ? "bg-primary text-white self-end"
                                            : "bg-gray-100 self-start"
                                        }`}
                                >
                                    {msg.type === "support" ? (
                                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                                    ) : (
                                        msg.content
                                    )}
                                </div>
                            ))}

                            {/* Loader for bot typing */}
                            {loading && (
                                <div className="p-2 rounded-lg max-w-[80%] bg-gray-100 self-start flex items-center gap-2">
                                    <Loader size={15} />
                                </div>
                            )}

                            <div ref={chatEndRef} />
                        </div>

                        {/* Input box */}
                        <div className="p-3 border-t flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-1 border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading}
                                className="bg-primary p-2 rounded-lg text-white disabled:bg-gray-400 hover:bg-blue-700 transition"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
