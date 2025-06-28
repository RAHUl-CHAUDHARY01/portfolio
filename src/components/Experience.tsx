import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Experience(){
    return(
        <div className="flex flex-col items-center p-5 mt-10 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Experience</h1>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/xipper.jpeg"} width={50} height={50} alt="HairiyapaLogo" className="rounded-full dark:invert"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div><h1 className="font-bold">Xipper</h1></div>
                        <div><h1 className="text-sm text-primary/70">Sept 2024 - Oct 2024 </h1></div>
                    </div>
                    <span className="text-sm font-normal text-primary/70">Web Developer Intern</span>
                </div>
            </div>
        </div>
    )
}