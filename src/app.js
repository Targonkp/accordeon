export default function () {


    // function multiplication(...items) {
    //     let sum = 1;
    //     for (let i = 0; i < items.length; i++) {
    //         sum *= items[i];
    //     }
    //     return sum;
    // }
    //





    const liEl = document.querySelectorAll('#ul li');
    for (let i=0; i<liEl.length; i++){
        liEl[i].addEventListener('click', function (e) {openbox(e)})
    }


    function openbox(e) {
      if (e.target.classList.contains('on')){
          // alert('Верно');
          document.querySelector('div').classList.remove('box-open');
          e.target.classList.remove('on');
      }
      else
      {
          // alert('Неверно');
        document.querySelector('div').classList.add('box-open');
          e.target.classList.add('on');

      }
      e.preventDefault();
    }



}