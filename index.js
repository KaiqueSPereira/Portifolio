const express = require('express');
const app = express();
const path = require('path');
const router = express.Router(); 

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/templates/index.html'));
})
router.get('/MGrelhas', function(req, res) {
    res.sendFile(path.join(__dirname+'/templates/MGrelhas.html'));
})

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Funcionando...");