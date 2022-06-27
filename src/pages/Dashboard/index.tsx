import { Button } from "../../components/atoms/Button"
import { TemplateContainer } from "../../components/templates"
import { Card } from "./components/Card"

export const Dashboard = () => {
  const array = [
    {id: '0', title: 'Netflix', category: 'Streaming', price: 39.99},
    {id: '0', title: 'Amazon', category: 'Streaming', price: 9.99},
    {id: '0', title: 'Spotify', category: 'Music', price: 18.99},
    {id: '0', title: 'Vivo', category: 'Compras', price: 69.99}
  ]

  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
        <span className="font-bold text-2xl">
          Rastreador de despesa
        </span>
        <nav className="flex gap-4">
          <Button>
            Adicionar Nova Conta
          </Button>
          <Button variant='ghost'>
            Sair
          </Button>
        </nav>
      </header>

      <main className="w-full max-w-screen-lg grid grid-cols-3 content-start h-5/6 bg-blue-50 gap-4 p-4 overflow-y-scroll">
        {array.map(i => (
          <Card key={i.id} title={i.title} category={i.category} price={i.price}/>
        ))}
        
      </main>
    </TemplateContainer>
  )
}

