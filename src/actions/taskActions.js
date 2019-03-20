export function addTask(task){
    return {
        type: "ADD",
        payload: {
            ...task,           
        }
    }
}

