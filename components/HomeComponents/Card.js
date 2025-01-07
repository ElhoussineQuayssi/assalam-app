import Image from "next/image"

const Card = ({icon, description ,textSize,textBold,textAlign}) => {
  return (
    <div className='p-6 flip flex-1 h-full hover:-translate-y-4 transition-transform duration-500 bg-slate-200 rounded-md flex flex-col justify-evenly items-center shadow-lg'>
      <div className='text-2xl flex-1 flex justify-center items-center'><Image src={icon} alt='icon' width={80} height={80}/></div>
      <h1 className={` flex-1 ${textBold ? "font-bold" : ''} ${textSize == "xl" ? "text-xl" : "textsm"} ${textAlign == "center" ? "text-center" : ''}`}>{description}</h1>
    </div>
  )
}

export default Card
