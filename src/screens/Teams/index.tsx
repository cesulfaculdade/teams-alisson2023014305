import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, Content, HeaderContainer} from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlitght";
import { TeamCard } from "@components/TeamCard";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";



export function Teams(){
    const[teams , setTeams] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleNewTeam(){
        navigation.navigate("newTeam");
    }

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

                <Button title="Criar uma nova equipe"
                onPress={handleNewTeam}
                />
 
            </Content>

        </Container>


    );
}
