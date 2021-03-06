module.exports = time = (req, res, next) => {
  const dateTime = new Date();
  const year = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const hour = dateTime.getHours()
  const min = dateTime.getMinutes()
  const sec = dateTime.getSeconds()
  console.log(`${year}-${month}-${day} ${hour}:${min}:${sec} | ${req.method} from ${req.url}`)
  next()
}