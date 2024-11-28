import React from "react";

export const Banner = ({ data }) => {
    return (
        <div className="main-h-[550px] flex justify-center items-center py-12">
            <div className="container">
                <div style={{ backgroundColor: data.bgColor }} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                    {/* Primeiro*/}
                    <div className="p-6 sm:p-8">
                        <p className="text-sm">{data.discount}</p>
                        <h1 className="uppercase text-4xl lg:text-6xl font-bold">{data.title}</h1>
                        <p className="text-sm">{data.date}</p>
                    </div>
                    {/* Segundo */}
                    <div className="h-full flex items-center">
                        <img src={data.image} alt="" className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"/>
                    </div>
                    {/* Terceiro */}
                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p className="font-bold text-xl">{data.title2}</p>
                        <p className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
                        <p className="text-sm tracking leading-5">{data.title4}</p>
                        <div>
                            <button style={{color: data.bgColor}} className="bg-white py-2 px-4 rounded-full">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner