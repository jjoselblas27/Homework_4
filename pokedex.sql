Create database pokedex;
use pokedex;

CREATE TABLE pokemon(
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    altura float,
    categoria varchar(255),
    peso float,
    habilidad varchar(255),
    tipo varchar(255),
    link varchar(255),
    modified_date DATETIME,
    created_date DATETIME,

    PRIMARY KEY(id)
);

-- EJEMPLO :
INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("bulbasaur", 2.04,"seed",15.2,"overgrow","grass", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", NOW(),NOW());

INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("charmander", 2, "lizard", 18.7, "blaze", "fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",NOW(),NOW());


INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("squirtle", 1.08,"tiny turtle", 19.8, "torrent", "water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",NOW(),NOW());

INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("caterpie", 1, "worm", 6.4, "shield dust", "bug", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",NOW(),NOW());

INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("butterfree", 3.07, "butterfly", 70.5, "compound eyes", "flying", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",NOW(),NOW());

INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("pikachu", 1.04, "mouse", 13.2, "static", "electric", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",NOW(),NOW());

INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("psyduck", 2.07, "duck", 43.2, "cloud nine", "water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",NOW(),NOW());
