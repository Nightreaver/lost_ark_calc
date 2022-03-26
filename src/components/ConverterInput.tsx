import { ArrowRightIcon } from "@heroicons/react/solid"

type ConverterInputProps = {
  title: string,
  text: string,
  leftIcon: string,
  rightIcon: string,
  value: number;
  onChange: (value: number) => void
}

export const ConverterInput: React.FC<ConverterInputProps> = (props) => {
  return (
    <div className="w-2/5 p-6 bg-stone-200 text-center rounded-md">
    <div
      style={{ fontFamily: "Philosopher,sans-serif" }}
      className="text-2xl text-amber-600 text-center"
    >
      {props.title}
    </div>
    <div className="flex justify-center items-center py-2">
      <img
        src={props.leftIcon}
        className="h-8"
      />
      <ArrowRightIcon className="h-6 px-2 text-stone-400" />
      <img
        src={props.rightIcon}
        className="h-8"
      />
    </div>
    <span>{props.text}</span>
    <div className="w-full pt-2">
      <span>Gold: </span>
      <input
        className="w-1/5"
        type="number"
        value={props.value}
        onChange={(t) => props.onChange(+t.target.value)}
      />
    </div>
  </div>
  )
}