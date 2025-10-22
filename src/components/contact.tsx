"use client"
import { Bricolage_Grotesque } from "next/font/google";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RainbowButton } from "./magicui/rainbow-button";
import { useRef, useState } from "react";
import axios from "axios"
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Contact(){
    const [loading,setLoading]= useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const handleClick = async () => {
      toast.success("Message sent successfully!")
    
    };


    return(
        <div className="flex flex-col mb-10 p-5 text-black bg-white/50 rounded-lg shadow-lg mt-10">
            <hr className=" w-1/2 mx-auto"/>
            <h1 className={`${font.className} font-semibold text-3xl mx-auto mb-5`}>Contact Me</h1>
            <div className="w-full mt-5">
                <h1>Your Email: </h1>
                <Input ref={emailRef} placeholder="Enter your email here." className="border border-black/20"/>
            </div>
            <div className="w-full mt-5">
                <h1>Your Message: </h1>
                <Textarea ref={messageRef} placeholder="Enter your email here." className="h-32 border border-black/20"/>
            </div>
            <RainbowButton onClick={handleClick} disabled={loading} className="mt-5 border border-black">{loading?<div className="flex items-center gap-2 border border-black/20"><Loader2 className="animate-spin border border-black/20"/>Sending message...</div>:"Send"}</RainbowButton>
        </div>
    )
}