var fs=require('fs');

fs.appendFile('apple.txt','could you understand or not!, NO',function(err){
    if (err) throw err;
    console.log('Saved!');
});
