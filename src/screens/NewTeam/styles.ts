import { Platform } from "react-native";
import styled from "styled-components/native";



export const Container = styled.View`

flex: 1;
background-color: ${({theme})=> theme.COLORS.GRAY_100} ;


`;


export const HeaderContainer = styled.View`
    background-color:${({theme})=> theme.COLORS.PURPLE_500} ;
    width: 100%;
    padding: 24px 0;

`;

export const Content = styled.View`
    padding: ${Platform.OS === "ios" ? '24px 24px 0 24px' : '24px'};
    
    justify-content: space-between;
    flex: 1;
`;
