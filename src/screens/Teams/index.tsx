import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, Content, HeaderContainer} from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlitght";
import { TeamCard } from "@components/TeamCard";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";



export function Teams(){
    const[teams , setTeams] = useState<string[]>([]);


    return(
        <Container>

            <HeaderContainer>
                <Header/>

                <Highlight
                
                    title="Equipes"
                    subtitle="Preparem suas equipes"
                />

            </HeaderContainer>

            <Content>

                <FlatList 
                data={teams}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                <TeamCard title={item}/> 
                )}
                ListEmptyComponent={()=> (<ListEmpty message="Começe criando uma equipe!"/>

                )}
                contentContainerStyle={teams.length === 0 && {flex: 1}}
                />
 
            </Content>

        </Container>


    );
}
