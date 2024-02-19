import './H1.css'

export default function H1(){
    let myname="Ankit Mishra";
    let fullName = ()=>{
        return 'Ankit Mishra';
    }
    let messageNumber=1000;
    return<div> 
        <h1>H1 Tag Here!!!! </h1>
        <h3>Hello My Name is: {myname} {fullName()}</h3>
        <p>Message No. is: {messageNumber}</p>
    </div>
}