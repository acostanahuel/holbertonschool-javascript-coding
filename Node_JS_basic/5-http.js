const express = require('express'); ¿
const app = express();¿

¿
app.get('/', (req, res) => {
  res.send('Hola desde mi servidor Express!'); ¿
});

const port = 1245; ¿
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
