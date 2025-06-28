import { School2 } from "lucide-react";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Education(){
    return(
        <div className="flex flex-col items-center p-5 mt-5 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Education</h1>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/College.webp"} width={50} height={50} alt="LPU LOGO" className="rounded-full"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="items-center gap-2"><h1 className="font-bold">Indian Institute of Information Technology Sonepat,Haryama</h1></div>
                        <h1 className="text-sm text-primary/70">Graduating in June 2026</h1>
                    </div>
                    <span className="text-sm font-normal text-primary/70">B.Tech in Information Technology</span>
                </div>
            </div>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    {/* <Image src={"/apslogo.png"} width={50} height={50} alt="APS LOGO" className=""/> */}
                    < School2 width={30} height={30} />
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="items-center gap-2"><h1 className="font-bold">Bhaurav Devras Saraswati Vidya Mandir</h1></div>
                        <h1 className="text-sm text-primary/70">2022</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}