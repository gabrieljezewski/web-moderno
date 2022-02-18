const schedule = require('node-schedule')

//Executando de 5 em 5 segundos, em qualquer minuto, executar ás 14hrs, ignorar o dia do mês, ignorar o próprio mês, executar no sábado.
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 6', function () {
    console.log('Executando tarefa 1.', new Date().getSeconds())
})

//Utilizando temporizador JavaScript, para cancelar a tarefa depois de 20 segundos
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1.')
}, 20000)

// Configurando regras para a tarefa
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(2, 6)]    // Executar de terça a sábado.
regra.hour = 14                                 // Executar sempre ás 14hrs.
regra.second = 30                               // Executar a partir do segundo 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2', new Date().getSeconds())
})