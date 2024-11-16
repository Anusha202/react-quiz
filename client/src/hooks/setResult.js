import * as Action from '../redux/result_reducer'
import {postServerData} from '../helper/helper'
export const PushAnswer=(result)=>async(dispatch)=>{
    try{
        await dispatch(Action.pushResultAction(result))
    }catch(error){
        console.log(error)
    }
}

    export const updateResult=(index)=>async(dispatch)=>{
        try{
            dispatch(Action.updateResultAction(index))
        }catch(error){
            console.log(error)
        }
    }

    //insert user data
    export const usePublishResult = (resultData) => {
        const { result, username } = resultData;
        (async () => {
            try {
                // Check if result is empty or username is missing
                if (result.length === 0 || !username) throw new Error("Couldn't get Result");
    
                // Send data to the server
                await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data);
            } catch (error) {
                console.log(error);
            }
        })();
    };
    


