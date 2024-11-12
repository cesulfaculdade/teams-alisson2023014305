import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

type MemberStorageDTO ={
    name: string;
    type: string;
    team: string;
}

export async function createMemberOnTeam(newMember: MemberStorageDTO, team: string){

    try {
        const storedMembers = await AsyncStorage.getItem(`${MEMBER_COLLECTION}-${team}`) ?? '[]';

        const members: MemberStorageDTO[] = storedMembers ? JSON.parse(storedMembers): [];

        const memberAlreadyExists = members.filter(member => member.name === newMember.name);

        if(memberAlreadyExists.length > 0 ){
            throw new AppError('Esse membro ja está adicionado.');
        }

        const storage = JSON.stringify([...members,newMember]);


        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, storage);

        console.log(storage)
        
    } catch (error) {
        throw error;
    }


}