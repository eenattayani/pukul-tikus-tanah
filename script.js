const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai = false;
let skor = 0;

function randomTanah(tanah) {
    const tRandom = Math.floor(Math.random() * tanah.length);
    return tRandom;
}

function munculkanTikus() {
    const tanahKe = randomTanah(tanah);
    tanah[tanahKe].classList.add('muncul');

    setTimeout(() => {
        tanah[tanahKe].classList.remove('muncul');
        if(!selesai){
            munculkanTikus();
        }
    }, 700);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
        setTimeout(() => {
            alert(`Permainan Selesai!
            skor anda: ${skor}`);
        }, 1000);
    }, 10000);
}

function pukul() {
    skor++;
    papanSkor.textContent = skor;
    pop.play();
    this.parentNode.classList.remove('muncul');
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);  
});