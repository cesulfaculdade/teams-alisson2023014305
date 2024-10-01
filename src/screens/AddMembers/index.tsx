import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer } from "./styles";
import { Highlight } from "@components/Highlitght";
import { Button } from "@components/Button";
import { Input } from "@components/Input";


export function AddMembers(){
    return(
        <Container>

        <HeaderContainer>
            <Header showBackButton/>

            <Highlight
            
                title="Equipe 1"
                subtitle="Adicione os titulares e reservas"
            />

        </HeaderContainer>

        <Content>

        <InputContainer>

            <Input placeholder="Adicione um membro"/> 

        

        </InputContainer>

            <Button title="Deletar equipe" type="SECONDARY"/>

        </Content>

    </Container>




    );

}
