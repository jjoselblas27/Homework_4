const mysql = require('mysql');
const express = require('express');

var app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());


app.get('/pokemons' ,function(req,res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
      });
    
    connection.connect();

    var myQuery = "SELECT * FROM pokemon";

    connection.query(myQuery, function(error, results, fields){
        if(error) throw error;

        res.send(results);

        connection.end();
    })
    
})


app.get('/pokemons/:id' ,function(req,res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
      });
    
    connection.connect();

    var myQuery =   "SELECT * FROM pokemon " +
                    " WHERE id = ? ";
    var myValues = [req.params.id];


    connection.query(myQuery, myValues, function(error, results, fields){
        if(error) throw error;

        res.send(results);

        connection.end();
    })
    
})


app.post('/pokemons', function(req,res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
      });
    
    connection.connect();

    var myQuery =   "INSERT INTO pokemon (nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date) "+
                    " VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW());"

    var myValues = [req.body.nombre, req.body.altura, req.body.categoria, req.body.peso, req.body.habilidad, req.body.tipo, req.body.link];

    connection.query(myQuery, myValues, function(error, results, fields){
        if(error) {
          console.log(error);
          throw error;
        }
        res.send(results);

        connection.end();
    })
})


app.put('/pokemons/:id', function(req,res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
      });
    
    connection.connect();

    var myQuery =   "UPDATE pokemon "+
                    "SET modified_date = NOW()";
    var myValues = [];

    if(req.body.nombre){
      myQuery += ", nombre = ? ";
      myValues.push(req.body.nombre);
    }
    if(req.body.altura){
      myQuery += ", altura = ? ";
      myValues.push(req.body.altura);
    }
    if(req.body.categoria){
      myQuery += ", categoria = ? ";
      myValues.push(req.body.categoria);
    }
    if(req.body.peso){
      myQuery += ", peso = ? ";
      myValues.push(req.body.peso);
    }
    if(req.body.habilidad){
      myQuery += ", habilidad = ? ";
      myValues.push(req.body.habilidad);
    }
    if(req.body.tipo){
      myQuery += ", tipo = ? ";
      myValues.push(req.body.tipo);
    }
    if(req.body.link){
      myQuery += ", link = ? ";
      myValues.push(req.body.link);
    }


    myQuery += " WHERE id = ?";
    myValues.push(req.params.id);

    connection.query(myQuery, myValues, function(error, results, fields){
        if(error) throw error;

        res.send(results);
        connection.end();
    })
})

app.delete('/pokemons/:id', function(req,res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'pokedex'
  });

  connection.connect();

  myQuery = "DROP FROM pokemon" +
            " WHERE id = ? ";
  var myValues = [req.params.id];

  connection.query(myQuery, myValues, function(error, results, fields){
    if(error) throw error;

    res.send(results);
    connection.end();
  })

})

app.listen(3000,function(){
    console.log("abierto en el puerto 3000");
})
