const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const cursosRoutes = require('./routes/cursosRoutes')
const professoresRoutes = require('./routes/professoresRoutes')
const siteRoutes = require('./routes/siteRoutes')


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/cursos', cursosRoutes)
app.use('/professores', professoresRoutes)
app.use('/site', siteRoutes)

app.listen(3001)