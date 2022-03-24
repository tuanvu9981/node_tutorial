const sayHello = (name) => {
    console.log(`Good afternoon, ${name}`);
}

myList = ["Josh", "Christine", "Becky", "Frank"]

const myFunction = () => {
    //traverse using FOR
    console.log("\nTraverse using FOR")
    for (i = 0; i < myList.length; i++) {
        sayHello(myList[i])
    }

    //traverse using while
    console.log("\nTraverse using WHILE")
    i = 0;
    while (i < myList.length) {
        console.log(myList[i]);
        i++;
    }

    //traverse using forEach + arrow Function
    console.log("\nTraverse using forEach + arrow Function")
    myList.forEach(
        (element) => console.log(element)
    )

    //traverse using forEach + function
    console.log("\nTraverse using forEach + function")
    myList.forEach(function (element) {
        console.log(element)
    })
}

module.exports = { sayHello }; 