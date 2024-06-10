var dob = document.querySelector("#dob")
dob.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate = new Date(dob.value)
    let today = new Date()
    console.log(today)

    let y1,m1,d1;
    y1=today.getFullYear()
    m1=today.getMonth()+1
    d1=today.getDate()
    console.log(d1+"/"+m1+"/"+y1)

    let y2,m2,d2;
    y2=birthDate.getFullYear()
    m2=birthDate.getMonth()+1
    d2=birthDate.getDate()

    let y3,m3,d3;
    y3=y1-y2
    m3=m1-m2
    d3=d1-d2

    if(m1>=m2){
        m3=m1-m2
    }else{
        y3--
        m3=12+(m1-m2)
    }
    if(d1>=d2){
        d3=d1-d2
    }else{
        m3--;
        d3=getDaysFromMonth(y3,m3)+(d1-d2)
    }
    result = document.querySelectorAll(".action h2")
    result[0].innerText = y3+" Years"
    result[1].innerText = m3+" Months"
    result[2].innerText = d3+" Days"

}
function getDaysFromMonth(year,month){
    return new Date(year,month,0).getDate()
}