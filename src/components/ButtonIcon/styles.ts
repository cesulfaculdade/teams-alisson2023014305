import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';
import theme from "@theme/index";


export type ButtonTypeStyleProps ='PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}


export const Container=  styled(TouchableOpacity)<Props>`
    width: 54px;
    height: 54px;
    background-color: ${({theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
    justify-content: center;
    align-items: center;
    border-radius: 8px;

`;
export const Icon = styled(MaterialIcons).attrs(({})=>({
    size: 24,
    color: theme.COLORS.GRAY_100


}))``;