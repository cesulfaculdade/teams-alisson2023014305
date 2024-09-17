import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props ={
    type: "PRIMARY" | "SECONDARY";
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    min-height: 55px;
    max-height: 55px;
    background-color: ${({theme , type})=> type === "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
    
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;
export const Title = styled.Text`

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    
    `}


`;