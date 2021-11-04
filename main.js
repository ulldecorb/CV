const titleColor = document.getElementById('header__sub-title').style;
const skills = document.getElementById('skills');
const aboutMe = document.getElementById('about-me');
const experience = document.getElementById('experience');
const education = document.getElementById('education');
const skillsBox = document.getElementById('skills__box').style;
const aboutMeBox = document.getElementById('about-me__box').style;
const experienceBox = document.getElementById('experience__box').style;
const educationBox = document.getElementById('education__box').style;
let titleIntervalcounter = 0;

setInterval(() => {
    titleIntervalcounter%2 && (titleColor.color = '#f0f')
    !(titleIntervalcounter%2) && (titleColor.color = '#000')
    titleIntervalcounter ++;
}, 800);

aboutMe.addEventListener('click', () => {
    aboutMeBox.display === 'flex' ? aboutMeBox.display = 'none' : aboutMeBox.display = 'flex';
})

experience.addEventListener('click', () => {
    experienceBox.display === 'flex' ? experienceBox.display = 'none' : experienceBox.display = 'flex';
})

education.addEventListener('click', () => {
    educationBox.display === 'flex' ? educationBox.display = 'none' : educationBox.display = 'flex';
})

skills.addEventListener('click', () => {
    skillsBox.display === 'flex' ? skillsBox.display = 'none' : skillsBox.display = 'flex';
})
