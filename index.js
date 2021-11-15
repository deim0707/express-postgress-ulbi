const express = require('express');
const userRouter = require('./routes/user.route.js')

const PORT = process.env.PORT || 8080; // порт получаем из енв переменных, ИЛИ 8080

const app = express(); // инициализируем приложение
app.use(express.json()); // без этого экспресс не парсит JSON!!!
app.use('/api',userRouter);

// задаём действия по такому роуту
// app.get('/', (req,res) => {
//     res.send(`<h1>Урааа</h1>`)
// })

// запускаем приложение
app.listen(PORT, () => console.log(`сервер запущен на порту: ${PORT}`));
