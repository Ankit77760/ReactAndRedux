function Random(){
    let randomN = Math.floor(Math.random()*5)+1;
    return <h1 style={{'backgroundColor':'red'}}>Random Number is: {randomN}</h1>
}

export default Random;