import { all } from "axios";
import React, { useEffect, useState } from "react";
import AuthService from "../../Services/authservice";
import UserService from "../../Services/userservice";
import '../Homepage/Homepage.css'
import './Dashboard.css'
import Dashboardrow from "./Dashboardrow";
function Dashboard(){
    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState([]);
    const [ranking,setRanking] = useState([]);

    const compareScore = (a,b) =>{
        if(a.highscore < b.highscore){
            return -1;
        }
        if(a.highscore > b.highscore){
            return 1;
        }
        return 0;
    }

    // getallusers from the database
    const getAllusers = async () =>{
        const allUsersArray = Object.entries(await UserService.getUsersBoard());
        const userslist = []
        for(var i = 0;i<allUsersArray.length;i++){
            const adduser = {username : allUsersArray[i][1].username , highscore: allUsersArray[i][1].highscore};
            if(!(userslist.some(user => user.username === adduser.username))){
                const currentUser = AuthService.getCurrentUser();
                if(currentUser && currentUser.username === adduser.username){
                    adduser.highscore = currentUser.highscore;
                }
                userslist.push(adduser);
                setUsers((users) =>[...users,adduser]);
            }
        }
        return userslist;
    }

    // sort allusers by score for ranking
    const sortUsers = async () =>{
        try{
            const userlist = await getAllusers();
            //console.log("users",userlist);
            userlist.sort(compareScore).reverse();
            userlist.map((user,index) => user.rank = index+1);
            //console.log("sorted userlist",userlist);
            return userlist;
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() =>{
        async function fetchData(){
            const sortedUserlist = await sortUsers()
            .then((sortedUserlist) =>(setRanking(sortedUserlist)));
        }   
        async function mocktestdata(){
            const testranking = [
                {username: 'testuser2', highscore: 332, rank: 1},
                {username: 'naphattar', highscore: 238, rank: 2},
                {username: 'testuser7', highscore: 100, rank: 3},
                {username: 'testuser3', highscore: 100, rank: 4},
                {username: 'testuser1', highscore: 91, rank: 5}
            ];
            setRanking(testranking)
        }
        fetchData();
    },[]);

    const testbutton = ()=>{
        console.log(ranking);
        const test = ranking.map((user) => `${user.rank} ${user.username} ${user.highscore}`);
        console.log(test);
    }
    return(
        <div>
            <div className="dashboardpagebody">
                <div className="dashboardtext">
                    <h1>Leaderboard</h1>
                </div>
                <table className="leaderboardtable">
                    <tbody>
                        <tr className="toprow">
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                        { 
                            ranking.map((user) => {
                                return (
                                    <Dashboardrow username={user.username} rank={user.rank} highscore={user.highscore}/>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;