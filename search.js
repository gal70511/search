
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a name of a file: ', (answer) => {

var tr = 'NO';  //משמש לבדיקה אם נמצאה התאמה לקבצים מהקלט
fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  if (err) {
    console.log(err);
    return;
  }


  for(var i=0; i<files.length;i++)
  {
    if (files[i].indexOf(answer) >= 0) //בדיקה אם שם הקובץ הנקלט קיים לפחות בחלקו בספרייה
    {
        if(answer != "")
        {
            console.log('The path of the file: ' + __dirname + '\\' + files[i]);  //הנתיב שבו נמצא הקובץ
            tr = 'YES';
        }
    }
  }

if(tr == 'NO')
  console.log('No file was found');

});

  rl.close();
});



