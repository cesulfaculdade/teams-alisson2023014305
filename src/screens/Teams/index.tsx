import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, Title, HeaderContainer} from "./styles";
import { Header } from "@components/Header";



export function Teams(){
    return(
        <Container>

            {/* <Title>Equipes</Title> */}

            <HeaderContainer>
                <Header/>            
            </HeaderContainer>

        </Container>


    );
}
