require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieSession = require('cookie-session');
var morgan = require('morgan');

var app = express();

app.use(cookieSession({
  name: 'session',
  secret: process.env.COOKIE_SECRET,
  // Cookie Options
  maxAge: 6 * 60 * 60 * 1000 // 6 hours
}))

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const usersRouter = require("./routes/usersRoutes");
const campanhasRouter = require("./routes/campanhasRoutes");
const organizacaoRouter = require("./routes/organizacaoRoutes");
const noticiaRouter = require("./routes/noticiasRoutes");
const organizacaoLogRouter = require("./routes/organizacaoLogRoutes");
const categoriaRouter = require("./routes/categoriaRoutes");
const entregaRouter = require("./routes/entregaRoutes");
const voluntariadoRouter = require("./routes/voluntarioRoutes");
const donativofisicoRouter = require("./routes/donativoFisicoRoutes");
const tableDoacaoRouter = require("./routes/tableDoacaoRoutes");
const tablevoluntarioRouter = require("./routes/tableVoluntarioRoutes");


app.use("/api/users", usersRouter);
app.use("/api/campanhas", campanhasRouter);
app.use("/api/organizacaos", organizacaoRouter);
app.use("/api/noticias", noticiaRouter);
app.use("/api/orgs", organizacaoLogRouter);
app.use("/api/categoria", categoriaRouter);
app.use("/api/entrega", entregaRouter);
app.use("/api/voluntario", voluntariadoRouter);
app.use("/api/donativofisico", donativofisicoRouter);
app.use("/api/tabledoacao", tableDoacaoRouter);
app.use("/api/tabelavoluntario", tablevoluntarioRouter);



// when we don't find anything
app.use((req, res, next) => {
  res.status(404).send({ msg: "No resource or page found." });
})

// When we find an error (means it was not treated previously)
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send(err);
})

const port = parseInt(process.env.port || '8080');
app.listen(port, function () {
  console.log("Server running at http://localhost:" + port);
});