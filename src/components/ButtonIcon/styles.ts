import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';
import theme from "@theme/index";


export type ButtonTypeStyleProps ='PRIMARY' | 'SECONDARY';
export type ButtonIconSizeStyleProps = 'MD' | 'SM';
export type ButtonIconBorderRadiusStyleProps = 'RIGHT' | 'FULL';

type Props = {
    type: ButtonTypeStyleProps;
    size: ButtonIconSizeStyleProps;
    borderRadius: ButtonIconBorderRadiusStyleProps;
}


export const Container=  styled(TouchableOpacity)<Props>`
    width: 54px;
    height: 54px;

    ${({size})=> size === 'SM' && css`
        width: 44px;
        height: 44px;
    
    `}
    ${({ borderRadius }) => borderRadius === 'RIGHT' && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `};

    background-color: ${({theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
    justify-content: center;
    align-items: center;
    border-radius: 8px;

`;
export const Icon = styled(MaterialIcons).attrs(({})=>({
    size: 24,
    color: theme.COLORS.GRAY_100


}))``;