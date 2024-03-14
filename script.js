const currentDayText = $('#currentDay')
const timeBlock = $(".container")

const currentDay = dayjs().format("dddd MMMM D")
currentDayText.append(currentDay)

const scheduleElements = () => {

    const startTime = 9 
    const endTime = 17

    for (let i = startTime; i <= endTime ; i++) {
        
        const timeBlockDiv = $("<div></div>").addClass("container time-block-container")
        const timeBlockTime = $("<p></p>").addClass("container hour time-block")
        const timeBlockUserText = $("<input></input>").addClass("row textarea description")
        const timeBlockBtn = $("<button>Save</button>").addClass("saveBtn i:hover")
        
        if(i <= 11 ) {
            timeBlockTime.text(`${i}am`)
        } else {
            timeBlockTime.text(`${i}pm`)
        }

        if (dayjs().format("H") < i){
            timeBlockUserText.addClass("future")
        } else if (Math.floor(dayjs().format("H")) === i ){
            timeBlockUserText.addClass("present")
        } else {
            timeBlockUserText.addClass("past")
        }

        timeBlockDiv.append(timeBlockTime, timeBlockUserText, timeBlockBtn)
        timeBlock.append(timeBlockDiv)
    }
}