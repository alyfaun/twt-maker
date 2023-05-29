import React, {useState} from "react";
import "./App.css";
import pfp from './pfp.jpg';
import veri from './verified.png';
import repico from './reply.png';
import retico from './retweet.png';
import likico from './like.png';



function Tweet(){

    // set Display Name funciton
    const [name,setName]=useState("Aly S")
    function getName(val){
        setName(val.target.value)
    }

    // set User Name funciton
    const [user,setUser]=useState("aluwu")
    function getUser(val){
        setUser(val.target.value)
    }

    // set Tweet Content funciton
    const [content,setContent]=useState("I hope this goes viral so I can pay my bills lmao")
    function getContent(val){
        setContent(val.target.value)
    }

    // set # of Replies funciton
    const [reply,setReply]=useState(22)
    function getReply(val){
        setReply(val.target.value)
    }

    // set # of Retweets funciton
    const [retweet,setRetweet]=useState(128)
    function getRetweet(val){
        setRetweet(val.target.value)
    }

    // set # of Likes funciton
    const [likes,setLike]=useState(336)
    function getLike(val){
        setLike(val.target.value)
    }

    //dark mode button
    const [isDark, setMode]=useState(false)
    function darkMode(){
        setMode(!isDark)
    }
    
    return(
        <div className="twitter">

            {/* This is the styled, displayed tweet data based on input fields below */}
            <div className={isDark ? "tweet darkMode" : "tweet lightMode"}>
                <img src={pfp} className="pfp"/>
                <p className="displayName">{name}</p><img src={veri} className="veri"/>
                <p className="userName">@{user}</p><br/>
                <h3 className="tweetBody">{content}</h3>
                <p className="engage">
                    <img src={repico} className="social1"/>{reply}
                    <img src={retico} className="social2"/>{retweet}
                    <img src={likico} className="social3"/>{likes}
                </p>
            </div>

            <button onClick={darkMode}>Dark Mode</button>
            
            {/* This is the form that changes the content above when text in inputed */}
            <form> 
                <input type="text" placeholder="Name" maxlength="50" onChange={getName}/>
                <input type="text" placeholder="Username" maxlength="15" onChange={getUser}/><br/>

                <textarea placeholder="Tweet Content" rows="5" cols="60"  maxlength="300" onChange={getContent}></textarea><br/>
                <label className="caption">max 300 characters.</label><br/>
                
                <input type="number" placeholder="# of Replies" maxlength="6" onChange={getReply}/>
                <input type="number" placeholder="# of Retweets" maxlength="6" onChange={getRetweet}/>
                <input type="number" placeholder="# of Likes" maxlength="6" onChange={getLike}/>
            </form>

        </div>
        
    );
}

export default Tweet;