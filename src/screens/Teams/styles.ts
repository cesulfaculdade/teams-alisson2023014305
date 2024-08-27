import styled from "styled-components/native";



export const Container = styled.View`

flex: 1;
background-color: ${({theme})=> theme.COLORS.GREEN_500} ;
align-items: center;
justify-content: center;

`;

export const Title = styled.Text`

    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: 50px;

`;