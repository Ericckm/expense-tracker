import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonFormLog = ({children, ...props}: Props) => {
  return (
    <button 
    {...props}
    className="bg-blue-500 h-10 text-white font-bold hover:bg-blue-400 cursor-pointer transition-colors disabled:bg-red-500">
      {children}
    </button>
  )
}
