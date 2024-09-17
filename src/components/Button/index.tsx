import { Text, TouchableHighlightProps, TouchableOpacity } from "react-native";
import { Container, Title } from "./styles";


type Props = TouchableHighlightProps &{
    title: string;
    type: "PRIMARY" | "SECONDARY";
}

export function Button({title,type, ...rest}: Props){
    return(
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>


    )
}