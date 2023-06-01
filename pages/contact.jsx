import Link from "next/link";
import { useEffect } from "react";


export default function Contact (){

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, []);
    return(
        <div className="h-[2560px]">
            <h1 className="text-center text-5xl font-semibold my-20">
                Contact Us
            </h1>
            <p className="text-center text-2xl text-gray-600 mt-10">
                <Link href="https://www.facebook.com/aysha.afifa.393?mibextid=ZbWKwL">Aysha Afifa</Link>
            </p>
            <p className="text-center text-2xl text-gray-600 mb-10 mt-5">
                <Link href="https://www.facebook.com/Tama831?mibextid=ZbWKwL">Tamanna Tabassum</Link>
            </p>
        </div>
    )
}