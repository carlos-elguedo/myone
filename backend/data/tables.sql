--users
CREATE TABLE myuno.users (
	id BIGINT auto_increment NOT NULL,
	nickname varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	created_at DATETIME NOT NULL,
	update_at DATETIME NULL,
	name varchar(100) NULL,
	lastname varchar(100) NULL,
	CONSTRAINT users_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci
COMMENT='table to save users of the game';


--cards
CREATE TABLE myuno.cards (
	id INT auto_increment NOT NULL,
	color varchar(100) NOT NULL,
	name varchar(100) NOT NULL,
	`number` INT NULL,
	`action` varchar(100) NULL,
    `url` varchar(200) NOT NULL,
	CONSTRAINT cards_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci
COMMENT='table to save the diferent cards of the games';
