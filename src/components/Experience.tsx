import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Experience(){
    return(
        <div className="flex flex-col items-center p-5 mt-10 w-full text-black">
            <h1 className={`${font.className} font-semibold text-3xl`}>Experience</h1>
            
            {/* HCLTech Entry */}
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/hcl1.webp"} width={50} height={50} alt="HclLogo" className="rounded-full"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div><h1 className="font-bold">HCLTech</h1></div>
                        <div><h1 className="text-sm text-black/70">July 2025 - Nov 2025 </h1></div>
                    </div>
                    <span className="text-sm font-normal text-black/70">Software Developer Intern</span>
                    
                    {/* --- Added Button --- */}
                    <div>
                        <a 
                            href="https://drive.google.com/file/d/1KiNGB1HBvNxmav-ehYfgJDg4wZaYS1Ai/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 px-3 py-1 border border-black/30 rounded-md text-xs font-medium text-black/80 hover:bg-black/5 transition-colors"
                        >
                            Experience Letter
                        </a>
                    </div>
                    {/* --- End Added Button --- */}

                </div>
            </div>

            {/* Xipper Entry */}
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/xipper.jpeg"} width={50} height={50} alt="XipperLogo" className="rounded-full dark:invert"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div><h1 className="font-bold">Xipper</h1></div>
                        <div><h1 className="text-sm text-black/70">Sept 2024 - Oct 2024 </h1></div>
                    </div>
                    <span className="text-sm font-normal text-black/70">Frontend Developer Intern</span>
                    
                    {/* --- Added Button --- */}
                    <div>
                        <a 
                            href="https://drive.google.com/file/d/1oVIkptVM-sTvE1a6LNQ9R52VjigFckiy/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 px-3 py-1 border border-black/30 rounded-md text-xs font-medium text-black/80 hover:bg-black/5 transition-colors"
                        >
                            Experience Letter
                        </a>
                    </div>
                    {/* --- End Added Button --- */}

                </div>
            </div>
        </div>
    )
}