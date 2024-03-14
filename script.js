const currentDayText = $('#currentDay')
const timeBlock = $(".container")

const currentDay = dayjs().format("dddd MMMM D")
currentDayText.append(currentDay)
