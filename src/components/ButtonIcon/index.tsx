import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon } from "./styles";
import {MaterialIcons} from '@expo/vector-icons';

type Props = TouchableOpacityProps &{
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonTypeStyleProps;

 };

export function ButtonIcon({icon ,type = "PRIMARY" , ...rest}: Props){
    return(

        <Container type={type} {...rest}>

            <Icon name={icon}/>

        </Container>


    );

}