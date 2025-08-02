// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity 
// (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.


let arr = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]


const whosOnline = (friends) => {

    let newStatus = {}

    let online = friends.filter((item, index, arr) => {
        if(item.status === "online" && item.lastActivity <= 10) {
            return true;
        } 
    }).map((item, index, arr) => item.username);

    let away = friends.filter((item, index, arr) => {
        if(item.lastActivity > 10 && item.status === "online") {
            return true;
        }
    }).map((item, index, arr) => item.username);

    let offline = friends.filter((item, index, arr) => {
        if(item.status === "offline") {
            return true;
        }
    }).map((item, index, arr) => item.username);

    
    if(online.length > 0) {
        newStatus.online = online;
    } 

    if(away.length > 0) {
        newStatus.away = away;
    }

    if(offline.length > 0) {
        newStatus.offline = offline;
    }

    return newStatus;
}