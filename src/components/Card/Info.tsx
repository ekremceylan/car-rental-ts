import { CarType } from "../../types";
import {motion} from "framer-motion";

type Props ={
    car: CarType
};
type FieldProps ={
  img:string,
  text:string,
}
const Field = ({img,text}:FieldProps) => {
  return (
      <motion.div initial={{
        translateY:"50px",
        opacity: 0,
      }}
      whileInView={{
        translateY: "0",
        opacity:1,
      }}
       className="flex-center flex-col"> 
        <img width={25} src={img} alt="" />
        <p>{text}</p>
      
      </motion.div>
  );

}
const Info = ({car}: Props) => {
const transmission = car.transmission === "a" ? "Otomatik" : "Manuel";

const drive =  
car.drive === "fwd" 
? "Önden Çeker"
: car.drive === "rwd" 
? "Arkadan İtişli"
: "Dört Çeker";

  return (
    <div className=" flex group-hover:hidden justify-between w-full ">
      <Field img="/steering-wheel.svg" text={transmission}/>
      <Field img="/tire.svg" text={drive}/>
      <Field img="/gas.svg" text={car.fuel_type}/>
    </div>
  );
}

export default Info;