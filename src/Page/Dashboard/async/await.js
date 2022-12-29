async function testdata(){
    console.log(1);
    console.log(2);
    console.log(3);
}

function main(){
    for(var i = 0;i<10;i++){
        console.log("i = ",i+1);
        testdata();
    }
}

main();