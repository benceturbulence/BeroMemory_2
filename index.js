const cards = document.querySelectorAll('.memory-card');
const cardImgArray= ["img-1","img-2","img-3","img-4","img-5","img-6","img-7","img-8","img-9","img-10","img-11","img-12","img-13","img-14","img-15","img-16","img-17","img-18","img-19","img-20","img-21","img-22","img-23","img-24","img-25","img-26","img-27","img-28","img-29","img-30","img-31","img-32","img-33","img-34","img-35","img-36","img-37","img-38","img-39","img-40","img-41","img-42","img-43","img-44","img-45","img-46","img-47","img-48","img-49","img-50","img-51","img-52","img-53","img-54","img-55","img-56","img-57","img-58","img-59","img-60","img-61","img-62","img-63","img-64","img-65","img-66","img-67","img-68","img-69","img-70","img-71","img-72","img-73","img-74","img-75","img-76","img-77","img-78","img-79","img-80","img-81","img-82","img-83","img-84","img-85","img-86","img-87","img-88","img-89","img-90","img-91","img-92","img-93","img-94","img-95","img-96","img-97","img-98","img-99","img-100","img-101","img-102","img-103","img-104","img-105","img-106","img-107","img-108","img-109","img-110","img-111","img-112","img-113","img-114","img-115","img-116","img-117","img-118","img-119","img-120","img-121","img-122","img-123","img-124","img-125","img-126","img-127","img-128","img-129","img-130","img-131","img-132","img-133","img-134","img-135","img-136","img-137","img-138","img-139","img-140","img-141","img-142","img-143","img-144","img-145","img-146","img-147","img-148","img-149","img-150","img-151","img-152","img-153","img-154","img-155","img-156","img-157","img-158","img-159","img-160","img-161","img-162","img-163","img-164","img-165","img-166","img-167","img-168","img-169","img-170","img-171","img-172","img-173","img-174","img-175","img-176","img-177","img-178","img-179","img-180","img-181","img-182","img-183","img-184","img-185","img-186","img-187","img-188","img-189","img-190","img-191","img-192","img-193","img-194","img-195","img-196","img-197","img-198","img-199","img-200","img-201","img-202","img-203","img-204","img-205","img-206","img-207","img-208","img-209","img-210","img-211","img-212","img-213","img-214","img-215","img-216","img-217","img-218","img-219","img-220","img-221","img-222","img-223","img-224","img-225","img-226","img-227","img-228","img-229","img-230","img-231","img-232","img-233","img-234","img-235","img-236","img-237","img-238","img-239","img-240","img-241","img-242","img-243","img-244","img-245","img-246","img-247","img-248","img-249","img-250","img-251","img-252","img-253","img-254","img-255","img-256","img-257","img-258","img-259","img-260","img-261","img-262","img-263","img-264","img-265","img-266","img-267","img-268","img-269","img-270","img-271","img-272","img-273","img-274","img-275","img-276","img-277","img-278","img-279","img-280","img-281","img-282","img-283","img-284","img-285","img-286","img-287","img-288","img-289","img-290","img-291","img-292","img-293","img-294","img-295","img-296","img-297","img-298","img-299","img-300","img-301","img-302","img-303","img-304","img-305","img-306","img-307","img-308","img-309","img-310","img-311","img-312","img-313","img-314","img-315","img-316","img-317","img-318","img-319"]
let cardsFoundArray = []
let cardsChosenArray =[]

function getRandomNumber(){
    return Math.floor()
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }  
    return array;
}


const shuffled = cardImgArray.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 20);



let cardImgArrayDoubled = shuffle([...selected, ...selected])

function createBoard(){
    let cardArray=cardImgArrayDoubled.map( e => {
        return `<div class="memory-card" data-id="${e}">
                <div class="front-face"></div>
                <div class="back-face" style="background-image: url('img/${e}.jpg')"></div>
            </div>`
    }).join("")
    document.getElementById("memory-game").innerHTML = cardArray
}

createBoard()

const cardArray = Array.from(document.querySelectorAll(".memory-card"))
cardArray.forEach(e => e.addEventListener("click", flipCard))



function flipCard(){

    console.log("i am clicked")
    let cardId = this.getAttribute('data-id')

    cardsChosenArray.push(cardId)
    console.log(`Cards chosen> ${cardsChosenArray}`)
    this.classList.add("chosen")
        if (cardsChosenArray.length === 2){
            setTimeout(checkForMatch, 1500)
        }
}

function emptyArray(){
    console.log("Emptying cardschosenarray")
    cardsChosenArray = []
    console.log(cardsChosenArray)
}

function checkForMatch(){
    let classSetter = Array.from(document.querySelectorAll(".chosen"))

        if (cardsChosenArray[0]===cardsChosenArray[1]){
            console.log("You have found a match")
            cardsFoundArray.push(cardsChosenArray)
            classSetter.forEach(e =>e.classList.add("found"))
            classSetter.forEach(e =>e.classList.remove("chosen"))
            
            console.log("Cards found: "+cardsFoundArray)
            emptyArray()
        } 

        else {
            console.log("it is not a match")
            classSetter.forEach(e => e.classList.remove("chosen"))
        }
        isFinished()
        emptyArray()
}


function isFinished(){

    console.log("checking it")

    if (cardsFoundArray.length === cardImgArrayDoubled.length/2){
        console.log("Yes finished")
        document.getElementById("resultDisplay").style.display="flex"
        document.getElementById("memory-game").style.display="none"
    }
    else {
        console.log("Not yet")
    }
}