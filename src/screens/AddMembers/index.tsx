import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer, Tabs } from "./styles";
import { Highlight } from "@components/Highlitght";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Tab } from "@components/Tab";


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

            <Input 
                style={{borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth:0 }}
                placeholder="Adicione um membro"
            
            /> 
            <ButtonIcon 
            style={{borderTopLeftRadius:0, borderBottomLeftRadius:0  }}
            icon="add-circle-outline"/>
        

        </InputContainer>

        <Tabs>
            <Tab title="Titular" isActive={true} />
            <Tab title="Reserva"/>
        </Tabs>
           

            <Button title="Deletar equipe" type="SECONDARY"/>

        </Content>

    </Container>




    );

}
