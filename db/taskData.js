// import mongodb from "mongodb";
// const ObjectId = mongodb.ObjectId;

// let tasks;

// export default class TaskData {
//     static async injectDB(conn) {
//         if (tasks) {

//             return
//         }
//         try {
//             tasks = await conn.db(process.env.Tasks_NS).collection("tasks")
//             console.log("hit")
//         }
//         catch (err) {
//             console.error(`Could not establish connection handle in tasks`)
//         }
//     }
// }