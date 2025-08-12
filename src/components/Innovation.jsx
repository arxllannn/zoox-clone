'use client';
import { FiChevronRight } from "react-icons/fi";

export default function Innovation() {
    return (
        <section
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-end"
            style={{
                backgroundImage: `url('/images/innovation.png')`,
            }}
        >
            <div className="max-w-md  px-6 md:px-10 lg:px-14 pb-12">
                <div className="max-w-md  backdrop-blur-sm rounded-md">
                    <p className="text-xs uppercase font-semibold text-gray-800 mb-2">
                        The Future of Mobility
                    </p>
                    <h2 className="text-2xl leading-tight md:text-xl text-black leading-snug mb-4 pr-10">
                        Zoox combines advanced AI and precise engineering to deliver a safe and comfortable ride, every time.
                    </h2>
                    {/* <button className="bg-[#4dffca] hover:bg-[#3beab8] transition text-black font-semibold text-sm py-2.5 px-5 rounded-full shadow">
                        KNOW YOUR RIDE →
                    </button> */}

                    <button className="group zoom-experience-btn bg-[#64d5b3] relative flex items-center gap-3 border px-6 py-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                <FiChevronRight className="text-sm text-black" />
                            </div>
                        </div>
                        <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                            <span className="text-md text-black mr-2 font-bold">KNOW YOUR RIDE</span>
                            <div className="relative w-4 h-4 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                                    <FiChevronRight className="text-md text-black" />
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
