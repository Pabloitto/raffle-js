const express = require('express')
const app = express()

app.use('/', express.static('public', {
  index: 'main.html'
}))

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), () => {
  console.log('App is running on port', app.get('port'))
})
