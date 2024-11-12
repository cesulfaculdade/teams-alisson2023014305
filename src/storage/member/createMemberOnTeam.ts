import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { MemberStorageDTO } from "./memberStorageDTO";
import { getMembersByTeam } from "./getMembersByTeam";



export async function createMemberOnTeam(newMember: MemberStorageDTO, team: string){

    try {
        const storedMembers = await getMembersByTeam(team);

        const memberAlreadyExists = storedMembers.filter(member => member.name === newMember.name);

        if(memberAlreadyExists.length > 0 ){
            throw new AppError('Esse membro ja está adicionado.');
        }

        const storage = JSON.stringify([...storedMembers,newMember]);


        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, storage);

        console.log(storage)
        
    } catch (error) {
        throw error;
    }


}