import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAllTeams } from "./fetchAllTeams";
import { TEAM_COLLECTION } from "./starageConfig";
import { AppError } from "@utils/AppError";

export async function createTeam(newTeam: string){
    try {

        const storedTeams = await fetchAllTeams();

        const teamsAlreadyExists = storedTeams.includes(newTeam);

        if(teamsAlreadyExists){
            throw new AppError('Já existe uma equipe com esse nome.');
        }


        const storage =  JSON.stringify([...storedTeams, newTeam]);
        await AsyncStorage.setItem(TEAM_COLLECTION, storage);
       
    } catch (error) {
        throw error;
    }
    

    
}