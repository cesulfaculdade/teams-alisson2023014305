import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, Content, HeaderContainer} from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlitght";
import { TeamCard } from "@components/TeamCard";



export function Teams(){
    return(
        <Container>

            <HeaderContainer>
                <Header/>

                <Highlight
                
                    title="Equipes"
                    subtitle="Preparem suas equipes"
                />

            </HeaderContainer>

            <Content>
                <TeamCard title="Equipe 1"/> 
            </Content>

        </Container>


    );
}
