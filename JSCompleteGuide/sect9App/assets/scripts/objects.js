const addSkillBtn = document.getElementById('add-skill-btn');
const searchBtn = document.getElementById('search-btn');


//Storing the skills in an array 
const skills =[];

//Rendering the skills
const renderSkills = (filter = '') => {
    const skillList = document.getElementById('skill-list');

    if (skills.length === 0) {
        skillList.classList.remove('visible');
        return;
    } else {
        skillList.classList.add('visible');
    }

    skillList.innerHTML = '';

    const filteredSkills = !filter 
      ? skills 
      : skills.filter(skill => skill.info.skill.includes(filter));

    filteredSkills.forEach((skill) => {
        const skillElement = document.createElement('li');
        const { info, ...otherProps } = skill;
        console.log(otherProps);

        let { getFormatedTitle } = skill;
        //Using bind to explicitly connect 'this' with the correct thing that calls it
        getFormatedTitle = getFormatedTitle.bind(skill)

        let text = getFormatedTitle() + ' - ';
        for (const key in info) {
            if(key !== 'skill') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        skillElement.textContent = text;
        skillList.append(skillElement);
    });
};

//Adding the handler with local constants skill, name details
const addSkillHandler = () => {
    const skill = document.getElementById('skill').value;
    const name = document.getElementById('name').value;
    const details = document.getElementById('details').value;

    if (
        skill.trim() === '' ||
        name.trim() === '' ||
        details.trim() === ''
    ) {
        return;
    }
    //Seeting up the object
    const newSkill = {
        info: {
            skill,
            [name]: details
        },
        id: Math.random().toString(),
        //Simplified method syntax to add a method to the object 
        getFormatedTitle() {
           return this.info.skill.toUpperCase(); 
        }
    };

    skills.push(newSkill);
    renderSkills();
};

const searchSkillHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderSkills(filterTerm);
};

addSkillBtn.addEventListener('click', addSkillHandler);
searchBtn.addEventListener('click', searchSkillHandler);