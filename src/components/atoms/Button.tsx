import { ButtonHTMLAttributes, ReactNode } from "react"
import tw from 'tailwind-styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'ghost'
}

export const Button = ({ children, variant, ...props }: Props) => {

  if (variant === 'ghost') {
    return (
      <GhostButton
        {...props}
        className="">
        {children}
      </GhostButton>
    )
  }

  return (
    <MainButton
      {...props}
      className="">
      {children}
    </MainButton>
  )
}

export const BaseButton = tw.button`
h-10 px-8 rounded-full text-white font-bold cursor-pointer transition-colors disabled:bg-red-500
`

export const MainButton = tw(BaseButton)`
bg-blue-500 hover:bg-blue-400
`

export const GhostButton = tw(BaseButton)`
bg-transparent text-blue-500 hover:bg-blue-100
`
