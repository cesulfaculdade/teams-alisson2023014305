import { TouchableOpacityProps } from "react-native";
import { ButtonIconBorderRadiusStyleProps, ButtonIconSizeStyleProps, ButtonTypeStyleProps, Container, Icon } from "./styles";
import {MaterialIcons} from '@expo/vector-icons';

type Props = TouchableOpacityProps &{
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonTypeStyleProps;
    size?: ButtonIconSizeStyleProps;
    borderRadius?: ButtonIconBorderRadiusStyleProps;
 };

export function ButtonIcon({icon ,type = "PRIMARY" ,size= 'MD', borderRadius = 'RIGHT', ...rest}: Props){
    return(

        <Container type={type} 
        size={size}
        borderRadius={borderRadius}
        {...rest}>

            <Icon name={icon}/>

        </Container>


    );

}