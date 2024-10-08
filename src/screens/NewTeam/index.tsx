import { Header } from "@components/Header";
import { Container, Content, HeaderContainer} from "./styles";
import { Highlight } from "@components/Highlitght";
import { Button } from "@components/Button";
import { Input } from "@components/Input";



export function NewTeam(){
    return(
        <Container>

        <HeaderContainer>
            <Header showBackButton/>

            <Highlight
            
                title="Nova Equipe"
                subtitle="Crie uma equipe e adicione membros"
            />

        </HeaderContainer>

        <Content>

            <Input placeholder="Nome da Equipe"/>

            <Button title="Criar uma nova equipe"/>

        </Content>

    </Container>




    );

}

