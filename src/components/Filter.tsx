import ReactSelect from "react-select";
import { OptionType } from "../types";
import { useSearchParams } from "react-router-dom";
type Props = {
  options: OptionType[];
  name: string
}

const Filter = ({options, name}: Props) => {
const [params, setParams] = useSearchParams();


const handleChange = (e:OptionType | null) => {
params.set(name, e?.value as string)

//urlyi güncellemek için
setParams(params);

//urlden parametreyi alıp select bileşeninin istediği formata çevir


};

const selected = {
  label:params.get(name) || options[0].label,
  value: params.get(name) || options[0].value,
}

console.log(selected);
  return (
    <div className="text-black">
      <ReactSelect onChange={handleChange} 
      options={options} 
      defaultValue={selected}
      className="min-w-[100px]"/>
    </div>
  );
}

export default Filter;