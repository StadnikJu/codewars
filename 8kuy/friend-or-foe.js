// Make a program that filters a list of strings and returns a list with
//  only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
// Otherwise, you can be sure he's not...


function friend(friends){
    const myFriends = friends.filter(function(item, index, arr){
        if(item.length === 4){
            return true;
        }
    })
    
    return myFriends;
}