import { Button } from "../../../components/atoms/Button"

export const Card = ({title, category, price}) => {
  return (
    <article className="bg-white shadow-md p-4 h-40 relative justify-between flex flex-col gap-2 rounded-3xl">
          <Button variant='ghost' className="absolute top-0 right-0">
            Excluir
          </Button>
          <h2 className="font-bold text-2xl">
            {title}
          </h2>
          <p className="px-4 h-8 flex justify-center items-center text-blue-800 bg-blue-50 self-start rounded-full">
            {category}
          </p>
          <p className="font-medium">
            {price}
          </p>
        </article>
  )
}
