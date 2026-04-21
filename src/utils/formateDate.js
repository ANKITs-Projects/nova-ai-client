
export const  formattedDate = (timeStamp)=> {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObj = new Date(timeStamp);

    const date = dateObj.getDate()
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()

    return `${date} ${month} ${year}`

}
