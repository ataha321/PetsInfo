const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

const petsPhoto =[
    "dalmation.jpg",
    "corgi.jpg",
    "cat.jpg",
    "python.jpg",
    "dog.jpg",
];

const showInfo = () => {
    let petNumRef = document.querySelector("#petNum");
    

    let petNum = petNumRef.value;
    

    petNum = parseInt(petNum);
    let petId = petNum - 1;
    let pet = petsData[petId];

    let petInfo = `${pet.petName} the pet is ${pet.age} year old. This pet weighs ${pet.weightInKilos} and is a ${pet.breed}.`;

    //pet is treat as an object not an index
    
    document.querySelector(".selectedPetInfo").innerHTML = petInfo;
    let area = document.querySelector(".dogImg")
    let dogImg = document.createElement("img");
    dogImg.src = petsPhoto[petId];
    area.appendChild(dogImg);


    
    console.log(pet);
    console.log(petInfo);
    return(petInfo);   
}

let petInfo = showInfo();