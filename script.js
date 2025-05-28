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
            <button onclick="showSection('lab2-section1')">Тема, мета лабораторної роботи №2</button>
            <button onclick="showSection('lab2-section2')">Способи підключення стилів</button>
            <button onclick="showSection('lab2-section3')">Селектори</button>
            <button onclick="showSection('lab2-section4')">CSS</button>
            <button onclick="showSection('lab2-section5')">Висновки до лабораторної №2</button>
        `;
    }
    if (lab === 'lab3') {
        secondFrame.innerHTML = `
            <button onclick="showSection('lab3-section1')">Тема, мета лабораторної роботи №3.1</button>
            <button onclick="showSection('lab3-section2')">Завдання №1</button>
            <button onclick="showSection('lab3-section3')">Завдання №2</button>
            <button onclick="showSection('lab3-section4')">Завдання №3</button>
        `;
    }
    if (lab === 'course') {
        secondFrame.innerHTML = `
            <button onclick="showSection('course-section1')">Повний Курс з React, Redux і Redux Toolkit</button>
            <button onclick="showSection('course-section2')">Node.js - Повний Курс з Node.js</button>
            <button onclick="showSection('course-section3')">JavaScript Advanced - продвинуті концепції мови і ООП</button>
        `;
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.lab-content').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
