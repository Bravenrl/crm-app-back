const express =  require('express');
const itemRouter = require('./routes/item.routes');

const PORT = process.env.PORT || 4200;

const app = express();
app.use(express.json());
app.use('/', itemRouter);

app.listen(PORT, () => console.log(`server started on ${PORT}`));
