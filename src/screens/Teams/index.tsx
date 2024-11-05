import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Logo from "@assets/logo.png";
import { Container, Content, HeaderContainer} from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlitght";
import { TeamCard } from "@components/TeamCard";
import { useEffect, useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fetchAllTeams } from "src/storage/team/fetchAllTeams";



export function Teams(){
    const[teams , setTeams] = useState<string[]>([]);

    const navigation = useNavigation();

    const insets = useSafeAreaInsets();

    function handleNewTeam(){
        navigation.navigate("newTeam");
    }


    async function handleFetchAllTeams() {
        try {
            const data = await fetchAllTeams();
            console.log(data);
            setTeams(data);
        } catch (error) {
            throw console.log(error);
        }
    }

    useEffect(()=>{
        handleFetchAllTeams();
    },[])


    return(
        <Container style={{paddingBottom: insets.bottom}}>

            <HeaderContainer style={{paddingTop: insets.top}}>
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
