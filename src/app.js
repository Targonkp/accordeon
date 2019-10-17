export default function () {


let acc = document.getElementsByClassName('accordeon');
let i;

for(i=0; i<acc.length; i++){
    acc[i].addEventListener(
        'click',
        function(){
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        }
    )
}

}