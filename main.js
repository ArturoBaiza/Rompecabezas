document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://www.mundomar.es/wp-content/uploads/2023/10/NUTRIA-2.jpg',
        'https://www.fundacionaquae.org/wp-content/uploads/2016/01/nutria.jpg',
        'https://949.com.gt/wp-content/uploads/2023/08/suga-1-696x464.jpg',
        'https://vanguardia.com.mx/binrepository/1200x700/0c0/1200d801/none/11604/NCXG/se-revelo-la-carta-que-suga-de-bts-le_1-7056970_20230923191014.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/76/Seehund11cele4_edit.jpg',
      'https://www.microscopio.pro/wp-content/uploads/focas-en-peligro-la-alarmante-situacion-de-una-especie-en-riesgo-de-desaparecer.jpg'
    ];

    let currentImageIndex = 0;

    function setPuzzleImage(imageUrl) {
        const pieces = document.querySelectorAll('.pieza');
        pieces.forEach(piece => {
            piece.style.backgroundImage = `url(${imageUrl})`;
        });
    }

    function initializePuzzle() {
        // Mezclar y asignar números
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);

        const pieces = Array.from(document.querySelectorAll('.pieza'));
        pieces.forEach((piece, index) => {
            piece.setAttribute('numero', shuffledNumbers[index]);
        });

        // Establecer la imagen del rompecabezas
        setPuzzleImage(images[currentImageIndex]);
    }

    const controlDrag = dragula([document.getElementById('idRompecabezas')]);

    controlDrag.on('dragend', () => {
        let code = '';
        const newPieces = Array.from(document.querySelectorAll('.pieza'));
        newPieces.forEach(piece => {
            code += parseInt(piece.getAttribute('numero'));
        });

        document.getElementById('idMuestra').innerHTML = code;

        if (code === '123456789') {
            fnGano();
        }
    });

    function fnGano() {
        alert('¡Has Ganado!');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        initializePuzzle();
    }

    document.getElementById('btnNextPuzzle').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        initializePuzzle();
    });

    initializePuzzle();
});