const sayHello = (name) => {
    console.log(`Good afternoon, ${name}`);
}

myList = ["Josh", "Christine", "Becky", "Frank"]

const traverseFOR = (arr) => {
    console.log("\nTraverse using FOR");
    for (i = 0; i < arr.length; i++) {
        sayHello(arr[i])
    }
    console.log("\n");
}

const traverseWHILE = (arr) => {
    console.log("\nTraverse using WHILE")
    i = 0;
    while (i < myList.length) {
        console.log(myList[i]);
        i++;
    }
    console.log("\n");
}

const traverseForEachArrow = (arr) => {
    console.log("\nTraverse using forEach + arrow Function");
    arr.forEach(
        (element) => console.log(element)
    );
    console.log("\n");
}

const traverseForEachFunction = (arr) => {
    console.log("\nTraverse using forEach + function")
    arr.forEach(function (element) { console.log(element) });
    console.log("\n");
}

// traverseFOR(myList);
// traverseWHILE(myList);
// traverseForEachArrow(myList);
// traverseForEachFunction(myList);

module.exports = { sayHello, traverseForEachArrow }; 