"use client";
import { Bricolage_Grotesque } from "next/font/google";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RainbowButton } from "./magicui/rainbow-button";
import { useState, FormEvent } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    // Basic validation
    if (!email || !message) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      // TODO: Implement your actual API call here
      // Example:
      // await axios.post("/api/contact", { email, message });

      // Simulating a network request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On success
      toast.success("Message sent successfully!");
      setEmail(""); // Clear form
      setMessage(""); // Clear form
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // CHANGE: Swapped bg-white/50 for solid bg-white for better contrast
    <div className="flex flex-col mb-10 p-6 md:p-8 text-black bg-white/40 rounded-lg shadow-lg mt-10 max-w-xl mx-auto">
      <hr className="w-1/3 mx-auto border-black/10" />
      <h1
        className={`${font.className} font-semibold text-3xl text-center my-6`}
      >
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-800">
            Your Email:
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            disabled={loading}
            // CHANGE: Added border back
            className="border border-black/20"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-800"
          >
            Your Message:
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here."
            // CHANGE: Added border back
            className="h-32 border border-black/20"
            disabled={loading}
          />
        </div>

        <RainbowButton
          type="submit"
          disabled={loading}
          // CHANGE: Added border to the button
          className="mt-6 border border-black/20"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" size={18} />
              Sending message...
            </div>
          ) : (
            "Send"
          )}
        </RainbowButton>
      </form>
    </div>
  );
}