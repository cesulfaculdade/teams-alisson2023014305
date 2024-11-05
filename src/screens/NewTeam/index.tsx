import { Header } from "@components/Header";
import { Container, Content, HeaderContainer} from "./styles";
import { Highlight } from "@components/Highlitght";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createTeam } from "src/storage/team/createTeam";



export function NewTeam(){

    const[team, setTeam] = useState<string>("");

    const insets = useSafeAreaInsets();

    const navigation = useNavigation();

    async function handleAddMembers(){
        await createTeam(team);
        navigation.navigate("addMembers", { team });
    }


    return(
        <Container style={{paddingBottom: insets.bottom}}>

        <HeaderContainer style={{paddingTop: insets.top}}>
            <Header showBackButton/>

            <Highlight
            
                title="Nova Equipe"
                subtitle="Crie uma equipe e adicione membros"
            />

        </HeaderContainer>

        <Content>

            <Input placeholder="Nome da Equipe"
                onChangeText={setTeam}
            
            />

            <Button title="Criar uma nova equipe" onPress={handleAddMembers}/>

        </Content>

    </Container>




    );

}

