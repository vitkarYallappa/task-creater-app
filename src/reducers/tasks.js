const initialTasks = {
    todos: [{
        taskName: "Meeting 1",
        description: "Meeting With South Asia Client",
        status: 0,
        taskDate: "",
        taskTime: "",
        startDate:new Date()
    }, {
        taskName: "Meeting 2",
        description: "Meeting With South Africa",
        status: 0,
        taskDate: "",
        taskTime: "",
        startDate:new Date()
    }, {
        taskName: "Meeting 3",
        description: "Meeting With Indonesia",
        status: 0,
        taskDate: "",
        taskTime: "",
        startDate:new Date()
    }, {
        taskName: "Meeting 4",
        description: "Meeting With SOPMO POC",
        status: 0,
        taskDate: "",
        taskTime: "",
        startDate:new Date()
    }]
}

const tasks = (state = initialTasks, action) => {
    switch (action.type) {
        case "ADD":

            // let task = action.payload;
            // let tasks = state.todos;
            // tasks.unshift(task);
            console.log(action.payload)
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }

            break;

        default:
            return {
                ...state,
            }
            break;
    }
}

// module.exports = tasks;
export default tasks;