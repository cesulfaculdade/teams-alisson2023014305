import styled, { css } from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 44px;
    ${({theme})=> css`
    
    background-color: ${theme.COLORS.GRAY_100};
    border-color: ${theme.COLORS.GRAY_200};
    
    `}
    flex-direction: row;
    align-items: center;
    border-width: 1px;
    padding-left: 12px;
    border-radius:8px;
    margin-bottom:14px;
   
`;
export const Name=  styled.Text`
    flex: 1;
    ${({theme})=> css`
    
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
    
    `}
`;