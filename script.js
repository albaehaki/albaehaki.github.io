const aku = ['photographers', 'graphic design', 'web programmer'];

const ubah = document.querySelector('.tulisan');

window.addEventListener('DOMContentLoaded',function (e) {
        console.log(e.target);
        
        
            
        setInterval(() => {
            
            setTimeout(() => {
                ubah.innerHTML = `I am ${aku[0]}`;
            }, 2000);
            setTimeout(() => {
               ubah.innerHTML = `I am ${aku[1]}`;
            }, 4000);
            setTimeout(() => {
               ubah.innerHTML = `I am ${aku[2]}`;
           },6000);
        }, 6000);
        
    }
);