// IPO - input process output

// constants and variables (state)
let skills;

// cached element references
const $button = $('button');
const $ul = $('ul');
const $input = $('input');

// event listeners
$button.on('click', handleAddSkill);
$ul.on('click', handleDeleteSkill);

// functions
init();

function init() {
    skills = [];
    render();
};

function handleAddSkill() {
    // store the value from the input tag inside a local variable
    const skill = $input.val();
    // check to make sure we have skill data
    if(skill) {
        // create the UI for a skill
        const $skill = $(`<li><span>X</span>${skill}</li>`);
        // push the skill UI into the skill list
        skills.push($skill);
        // clear the input tag's value
        $input.val('');
        // call rencer()
        render()
    } else return;
}

function handleDeleteSkill() {
    alert('elements inside of ul tag clicked');
}

function render() {
    if(!skills.length) $ul.css('margin-botton', '30px');
    else $ul.css('margin-botton', '0px');
    // take the list of skills in the skills array and add them to the UL tag
    $ul.html(skills);
}