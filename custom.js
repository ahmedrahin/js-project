let milestoneData = JSON.parse(data).data;
function loadMilestones(){
    const milestone = document.querySelector('.milestones');
    milestone.innerHTML = `${milestoneData.map(function (milestone){
        return `<div class="milestone border-b" id="${milestone._id}">
            <div class="flex">
            <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${milestone._id})" /></div>
            <div onclick="openMilestone(this, ${milestone._id})">
                <p>
                  ${milestone.name}
                <span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                </p>
            </div>
            </div>
            <div class="hidden_panel">
            ${milestone.modules.map(function(module){
                return `<div class="module border-b">
                            <p>${module.name}</p>
                        </div>`
            }).join('')}
            </div>
        </div>`
    }).join("")}`;
    
}

function openMilestone(milestoneElement, id){

    let currentPanel = milestoneElement.parentNode.nextElementSibling;
    let shownPanel   = document.querySelector('.show');
    let active       = document.querySelector('.active');

    milestoneElement.classList.toggle('active');

    if(active && milestoneElement.classList.contains('active')){
        active.classList.remove('active')
    }


    if(!currentPanel.classList.contains("show") && shownPanel)
        shownPanel.classList.remove('show');
        currentPanel.classList.toggle('show');

        showMilestone(id);
}

function showMilestone(id){
    let milestoneImage = document.querySelector('.milestoneImage');
    let milestoneName  = document.querySelector('.title');
    let milestoneDec   = document.querySelector('.details')

    milestoneImage.style.opacity = 0;
    milestoneImage.src       = milestoneData[id].image;
    milestoneName.innerText  = milestoneData[id].name;
    milestoneDec.innerText   = milestoneData[id].description;
 
}
let milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.onload = function(){
    this.style.opacity = "1";
}

function markMileStone(checkbox, id){
    const doneList = document.querySelector(".doneList");
    const milestonesList = document.querySelector(".milestones");
    const item = document.getElementById(id);

    if(checkbox.checked){
        milestonesList.removeChild(item);
        doneList.appendChild(item);
    }else {
        doneList.removeChild(item);
        milestonesList.appendChild(item);
    }

}

loadMilestones()
console.log(milestoneData)
// end
