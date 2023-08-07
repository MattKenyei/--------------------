//распознаватель
var recoginizer = new webkitSpeechRecognition();
//начало
recoginizer.interinResults = true;
//язык
recoginizer.lang = 'ru-Ru';
//колбек
recoginizer.onresult = function(event){
    var result = event.results[event.resultIndex];
    if(result.isFinal){
        alert('Вы сказали: ' + result[0].transctipt);
    } else{
        console.log('Промежуточный результат: ', result[0].transcript);
    }
};
function speech(){
    recoginizer.start();
}
