import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, HeaderContainer} from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlitght";



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

        </Container>


    );
}
