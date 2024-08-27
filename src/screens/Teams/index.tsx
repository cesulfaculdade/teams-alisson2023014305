import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, Title } from "./styles";


export function Teams(){
    return(
        <Container>
            <Image source={Logo}/>
            <Title>Equipes</Title>
        </Container>


    );
}
