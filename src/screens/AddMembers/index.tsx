import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer, Tabs } from "./styles";
import { Highlight } from "@components/Highlitght";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Tab } from "@components/Tab";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Tag } from "@components/Tag";
import { MemberCard } from "@components/MemberCard";
import { ListEmpty } from "@components/ListEmpty";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMemberOnTeam } from "@storage/member/createMemberOnTeam";
import { AppError } from "@utils/AppError";
import { getMembersByTypeAndTeams } from "@storage/member/getMembersByTypeAndTeam";
import { MemberStorageDTO } from "@storage/member/memberStorageDTO";

type RouteParams = {
    team : string;
}

export function AddMembers(){
    const[newMemberName, setNewMemberName] = useState<string>('');
    const [tab, setTab] = useState<string>("Titular");
    const [members, setMembers] = useState<MemberStorageDTO[]>([]);

    const insets = useSafeAreaInsets();

    async function handleAddMember(){
        if(newMemberName.trim().length === 0 ){
            return Alert.alert('Novo membro','Informe o nome do membro para adicionar.');
        }
        const newMember = {
            name: newMemberName, 
            team: team,
            type: tab,

        }

        try {
            await createMemberOnTeam(newMember, team);  
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Novo membro', error.message);
            }else{
                Alert.alert('Novo membro','Nao foi possivel adicionar um novo membro.')
            }
        }

         
    }

    async function fetchMembersByTypeAndTeam(){
        try {
            const membersByTeam = await getMembersByTypeAndTeams(team, tab);
            setMembers(membersByTeam);
        } catch (error) {
            
        }
    }

    useEffect(()=> {
        fetchMembersByTypeAndTeam()
    },[tab]);



    const route = useRoute();
    const { team } = route.params as RouteParams;

    return(
        <Container style={{paddingBottom: insets.bottom}}>

        <HeaderContainer style={{paddingTop: insets.top}}>
            <Header showBackButton/>

            <Highlight
            
                title= {team}
                subtitle="Adicione os titulares e reservas"
            />

        </HeaderContainer>

        <Content>

        <InputContainer>

            <Input 
                style={{borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth:0 }}
                placeholder="Adicione um membro"
                onChangeText={setNewMemberName}
                value={newMemberName}
            
            /> 
            <ButtonIcon 
            style={{borderTopLeftRadius:0, borderBottomLeftRadius:0  }}
            icon="add-circle-outline"
            onPress={handleAddMember}
            />
            

        </InputContainer>

        <Tabs>

            <FlatList
                data={['Titular','Reserva']}
                keyExtractor={(item) => item}
                renderItem={({item})=> (
                    <Tab
                        title={item}
                        isActive={item === tab}
                        onPress={()=> setTab(item)}
                    />
                    
                )}  
                horizontal
            />
            <Tag text={0}/>
        </Tabs>
           

        <FlatList
            data={members}
            keyExtractor={ item => item.name}
            renderItem={({item})=> (
                <MemberCard
                name={item.name}
                onRemove={()=> console.log("removeu")}
                
                />
                

            )}
            ListEmptyComponent={<ListEmpty message="Nao ha membros adicionados." />}
            showsVerticalScrollIndicator= {false}
            contentContainerStyle={[{paddingBottom: 100}, members.length === 0 && {flex:1}]}
        />

            <Button title="Deletar equipe" 
            type="SECONDARY"
            />
            
        </Content>

    </Container>




    );

}
