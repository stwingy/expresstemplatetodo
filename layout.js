
module.exports =({content},date)=>{
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/styles.css">
        <title>TODO</title>
    </head>
    <body>
 <div class="box" id="heading"> ${date}</div>
   
        ${content}
    </body>
    </html>`
}
