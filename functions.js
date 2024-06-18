function division() {
    let num1 = 10 
    let num2 =5
    let num3 =num1/num2
    console.log(num3)
}
division()

function area() {
    let see_me = document.getElementById("area")
   let base = 24
   let height = 12
   let area =(base*height)/2
   see_me.innerHTML = area
   
};

function volume() {
    let see_volume =document.getElementById('Volume')
   let height = 24
   let diameter = 14
   let volume= (height*diameter)*3.142
   see_volume.innerHTML = volume
};

function BMI() {
    let see_bmi = document.getElementById('BMI')
    let height = 12
    let weight = 65.5
    let BMI = weight/(height*height)
    see_bmi.innerHTML = BMI
};

function simple_interest() {
    let see_si = document.getElementById("SI")
    let principal = 10000
    let rate = 12
    let time = 4
    let simple_interest = (principal*rate*time)/100
    see_si.innerHTML = simple_interest

}