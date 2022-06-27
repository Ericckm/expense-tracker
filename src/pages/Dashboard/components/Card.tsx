import { Button } from "../../../components/atoms/Button"

export const Card = ({ title, category, price }) => {
  return (
    <article className="bg-white shadow-md p-4 h-50 relative flex justify-between  flex-col gap-4 rounded-3xl">
      <h2 className="font-bold text-2xl">
        {title}
      </h2>
      <p className="px-4 h-8 flex justify-center items-center text-blue-800 bg-blue-50 self-start rounded-full">
        {category}
      </p>
      <p className="font-medium">
        {' R$ ' + price}
      </p>
      <footer className="w-full flex justify-between">
        <Button variant='ghost'>
          Editar
        </Button>
        <Button variant='ghost'>
          Excluir
        </Button>
      </footer>
    </article>
  )
}
