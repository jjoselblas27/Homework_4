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
VALUES ("raichu", 2.04,"seed",15.2,"overgrow","grass", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", NOW(),NOW());

INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,link, modified_date, created_date)
VALUES ("charmander", 2, "lizard", 18.7, "blaze", "fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",NOW(),NOW());


