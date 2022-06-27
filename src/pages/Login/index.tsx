
import { Button } from "../../components/atoms/Button"
import { InputText } from "../../components/molecules/InputText"
import { Link } from "../../components/molecules/Link"
import { Sidebar } from "../../components/organism/Sidebar"
import { MainHeroSection, TemplateContainer, TemplateContent } from "../../components/templates"

export const Login = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar/>
        <MainHeroSection>
          <h1 className="font-bold text-3xl">
            Acesse sua conta
          </h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="email" type="email" />
            <InputText label="senha" type="password" />
            <Button  disabled>Entrar</Button>
          </form>
          <Link href="/register">Criar conta</Link>
        </MainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
