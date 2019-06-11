const today = moment()
const anniversary = moment(20170606, "YYYYMMDD")

const years = today.diff(anniversary, "years")
anniversary.add(years, "years")
const months = today.diff(anniversary, "months")
anniversary.add(months, "months")
const days = today.diff(anniversary, "days")

annyCounter = () => {
  document.querySelector("#days").innerHTML = days
  document.querySelector("#months").innerHTML = months
  document.querySelector("#years").innerHTML = years

  document.querySelector("#hours").innerHTML = moment().get("hour")
  document.querySelector("#minutes").innerHTML = moment().get("minute")
  document.querySelector("#seconds").innerHTML = moment().get("second")

  setTimeout(annyCounter, 1000)
}
