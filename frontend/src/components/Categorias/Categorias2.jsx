import React from "react"
import Image1 from "../../assets/category/PlayStation.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/JBL.png"
import Button from "../Shared/Button";

const Categorias = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* primeiro item*/}
                <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl front-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl front-bold  mb-2">PlayStation</p>
                            <Button
                                  text="Confira!"
                                  bgColor={"bg-primary"}
                                  textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"/>
                </div>

                {/* segundo item*/}
                <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white"></p>
                            <p className="text-2xl front-semibold mb-[2px]">VR</p>
                            <p className="text-4xl xl:text-5xl front-bold opacity-20 mb-2">VR</p>
                            <Button
                                  text="Confira!"
                                  bgColor={"bg-white"}
                                  textColor={"text-brandGreen"}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt="" className="w-[320px] absolute bottom-0"/>
                </div>

                {/* terceiro item*/}
                <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-brandBlue text-white rounded-3xl relative h-[320px] flex items-start">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl front-semibold mb-[2px]">JBL</p>
                            <p className="text-4xl xl:text-5xl front-bold opacity-40 mb-2">JBL</p>
                            <Button
                                  text="Confira!"
                                  bgColor={"bg-white"}
                                  textColor={"text-brandBlue"}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt="" className="w-[320px] absolute bottom-0 right-0"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categorias