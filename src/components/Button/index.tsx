import { Text, TouchableHighlightProps, TouchableOpacity } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";


type Props = TouchableHighlightProps &{
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Button({title, type = 'PRIMARY', ...rest}: Props){
    return(
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>


    )
}