const fs = require('fs')
//  Dosya oluşturulup veri eklendi
fs.writeFile('employees.json', `{"name": "Employee 1 Name", "salary": 2000}` , (err, data)=>{
    err ? console.log(err) : console.log('employees.json dosyası oluşturuldu..')
})
//  Dosyadaki veri okundu
fs.readFile('employees.json', 'utf8' , (err, data)=>{
    err ? console.log(err) : console.log(data)
})
//  Dosyadaki veri günellendi
fs.appendFile('employees.json', `{"name": "Employee 1 Name", "salary": 2000}` , (err, data)=>{
    err ? console.log(err) : console.log('Dosya güncellendi..')
})
//  Dosya Silindi   
// fs.unlink('employees.json', (err)=>{
//     err ? console.log(err) : console.log('Dosya silindi..')
// })