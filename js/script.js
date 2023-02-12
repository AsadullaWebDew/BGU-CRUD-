

let allStudent = []

let next = -1

// stdent qo'shish uchun funksiya

function addStudnt(){
    let studentName = document.getElementById("First-name").value;
    let studentSurName = document.getElementById("Last-name").value;
    let studentDate = document.getElementById("student-date").value;
    let studentContract = document.getElementById("education-type").value;
    // let deos = documentgetElementById("ijs")

    document.getElementById("First-name").value = "";
    document.getElementById("Last-name").value = "";
    document.getElementById("student-date").value = "";
    document.getElementById("education-type").value = "";

    // alert(studentName);
    // alert(studentSurName);
    // alert(studentDate);
    // alert(studentContract);

    // if()

    let nawStudent = {
        name: studentName,
        surname: studentSurName,
        date: studentDate,
        type: studentContract
    }

    if(next >= 0){
        allStudent[next] = nawStudent;
        next = -1
    } else{
        allStudent.push(nawStudent);
    }

    // edit funksiyasi dan so'ng add gaytish funksiyasi ishlash uchun tashab ketilgan "Tushunarli !!!"
    
    document.getElementById("add").textContent = "Add"

    

    // allStudent.push(nawStudent);
    console.log(allStudent);
    drawTable();
    allao();

}


// funksiya ishlashini meyor lash va taxlish qilish funksiyasi tra ishlarini muvofiqlashtirish va hamda ins  chizis uchun funksiya 


function drawTable(){
    let natija = ""

    for(let i = 0; i<allStudent.length; i++){   
        natija+= `
                    <tr>
                        <td>${i+1}</td>
                        <td>${allStudent[i].name} ${allStudent[i].surname}</td>
                        <td>${allStudent[i].date}</td>
                        <td>${allStudent[i].type}</td>
                        <td>
                            <button class="btn btn-primary" onclick="editStudent(${i})"><i class="fa-solid fa-pen"></i></button>
                            <button class="btn btn-danger" onclick="deleteCard(${i})"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                `
    }
    document.getElementById("result").innerHTML = natija
}


// edit qish uchun funksiya 

function editStudent(index){
    document.getElementById("First-name").value = allStudent[index].name;
    document.getElementById("Last-name").value = allStudent[index].surname;
    document.getElementById("student-date").value = allStudent[index].date;
    document.getElementById("education-type").value = allStudent[index].type;

    // ESLATMA: Hammasi shu yerdan boshladi a funksiya vazifa si shundan iboratki i++ qilganda hamma si orttga qaytadi va pasda xatolikni mutloqo bartaraf etish shu funksiya bajarilishi shart va darkor tapadagionclic qilgan joyda kamchiliklar bor togirlash kerak hozircha shular   !!!!

    next = index
    document.getElementById("add").textContent = "Save"

}


// o'chirish uchun funksiya

function deleteCard(ochirish){
    allStudent.splice(ochirish,1);
    drawTable()
}

// umumiy ochirish uchun funksiya

function allao(){
    let del = ""

    del+=`
        <button class="btn btn-success d-block m-auto" onclick="delall(${del})">All Delete</button>
    `
    document.getElementById("ijs").innerHTML = del;

}

function delall(Del){
    
    allStudent.splice(Del);
    drawTable()

}



