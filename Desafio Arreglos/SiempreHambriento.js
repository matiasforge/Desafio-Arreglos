function siempreHambriento(arr) {
    let tengoHambre = true;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "comida") {
        console.log("delicioso");
        tengoHambre = false; 
        }
    }

    if (tengoHambre) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);
