function updateSecondFrame(lab) {
    const secondFrame = document.getElementById('secondFrame');
    secondFrame.innerHTML = '';

    if (lab === 'lab1') {
        secondFrame.innerHTML = `
            <button onclick="showSection('lab1-section1')">Опис предметного середовища</button>
            <button onclick="showSection('lab1-section2')">Тема, мета WEB-застосунку</button>
            <button onclick="showSection('lab1-section3')">Структура головної сторінки</button>
            <button onclick="showSection('lab1-section4')">Висновки</button>
        `;
    }

    if (lab === 'lab2') {
        secondFrame.innerHTML = `
            <button onclick="showSection('lab2-section1')">Вступ</button>
            <button onclick="showSection('lab2-section2')">Задачі</button>
            <button onclick="showSection('lab2-section3')">Результати</button>
        `;
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.lab-content').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
