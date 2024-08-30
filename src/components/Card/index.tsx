import { CarType } from "../../types";
import {motion} from "framer-motion";
import Button from "../Button";
import Info from "./Info";
import { useState } from "react";
import Modal from "../Modal";
import generateImage from "../../utils/generatelmage";

interface Props {
    car: CarType
}

const Card = ({car}:Props) => {
  //modal açık mı buttona tıklanıldığı anda stati güncelleyeceğiz
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <motion.div 
    initial={{scale: 0.5, opacity:0}} 
    whileInView={{opacity:1, scale:1}} 
    transition={{duration:0.2}}className="car-card group">
    {/**araba ismi */}
<h2 className="car-card__content-title">
    {car.make} {car.model}
</h2>

    {/**araba fiyatı */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">
            {/**1500 -8500 rastgele sayı bulmamız için ve minimum 1500  olması lazım bu yuzden 0 gelme ihtimaline karsı 1500 parantez dısına + olarak gönderdik */}
            {Math.round(Math.random()*7000) + 1500}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>

    {/**resim alanı */}
<div className="relative w-full h-40 my-3">
    <img className="w-full h-full object-contain" src={generateImage(car)}alt="car" />
</div>

    {/**alt kısım */}

<div className="w-full"> <Info car={car}/> 
<div className="hidden group-hover:flex mt-[25px]">

  {/**bir state tuttuk ve butona tıklanınca state güncelleyeceğiz */}
    <Button 
    handleClick={()=> setIsOpen(true)}
    title="Daha Fazla" 
    designs="w-full py-[25px]"
    icon="right-arrow.svg"
    />
</div>

</div>

<Modal car={car} isOpen={isOpen} close={()=>setIsOpen(false)}/>
    </motion.div>
  );
}

export default Card;