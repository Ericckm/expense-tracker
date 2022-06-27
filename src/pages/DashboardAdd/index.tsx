import { Button } from "../../components/atoms/Button"
import { InputText } from "../../components/molecules/InputText"
import { Link } from "../../components/molecules/Link"
import { Sidebar } from "../../components/organism/Sidebar"
import { MainHeroSection, TemplateContainer, TemplateContent } from "../../components/templates"

export const DashboardAdd = () => {

  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <MainHeroSection>
          <h1 className="font-bold text-3xl">
            Cadastre uma nova despesa
          </h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="Despesa" type="text" />
            <InputText label="Categoria" type="text" />
            <InputText label="Valor" type="number" />
            <Button disabled>Adicionar</Button>
          </form>
          <Link href="/dashboard">Voltar</Link>
        </MainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
