

create table admin(
admin_id serial not null,
nome varchar(200),
email varchar(500),
senha varchar(500),
admin_token varchar(200),
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(admin_id)
);

CREATE TABLE doador (
    doador_id serial not null,
    nome varchar(100),
    telefone int,
    email_d varchar(500),
    senha_d varchar(500),
    points int,
    token varchar(200),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    primary key(doador_id)
);


create table organizacao(
org_id serial not null,
org_name varchar(300),
org_telefone int,
org_email varchar(200),
org_descricao varchar(600),
org_img varchar(600),
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(org_id)
);

create table campanha(
    campanha_id serial not null,
    nome_evento varchar(200),
    data_inicio date,
    data_termino date,
    campanha_observacao varchar(500),
    campanha_necessidade varchar(200),
    campanha_voluntario int,
    campanha_img varchar(500),
    org_id int not null,
 primary key(campanha_id),
foreign key (org_id) REFERENCES organizacao(org_id)
on delete no action on update no action
);

create table categoria(
categoria_id serial not null,
categoria_name varchar(100),
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(categoria_id)
);

create table subcategoria(
subcategoria_id serial not null,
item varchar(100),
descricao varchar(300),
categoria_id int not null,
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(subcategoria_id),
FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id)
on delete no action on update no action
);


create table donativofisico(
donativofisico_id serial not null,
don_name varchar(255),
don_email varchar(255),
don_telefone varchar(255),
don_observacao varchar(255),
doador_id int not null,
categoria_id int not null,
org_id int not null,
entrega_id int not null,
primary key(donativofisico_id),
FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id)
on delete no action on update no action,
FOREIGN KEY (org_id) REFERENCES organizacao(org_id)
on delete no action on update no action
);

create table voluntario(
voluntario_id serial not null,
nome varchar(500),
email  varchar(500),
campanha_id int not null,
doador_id int not null,
telefone int not null,
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key (voluntario_id) ,
foreign key (campanha_id) REFERENCES campanha(campanha_id)
on delete no action on update no action,
foreign key (doador_id) REFERENCES doador(doador_id)
on delete no action on update no action
);

CREATE TABLE noticias (
    noticia_id SERIAL NOT NULL,
    org_id INT NOT NULL,
    noticia_title VARCHAR(100),
    noticia_descricao VARCHAR(500),
    noticia_texto VARCHAR(500),
    noticia_img VARCHAR(500),
    noticia_date TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (noticia_id),
    FOREIGN KEY (org_id) REFERENCES organizacao(org_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE org (
    organizacao_id serial not null,
    organizacao_nome varchar(100),
    organizacao_email varchar(500),
    organizacao_senha varchar(500),
    organizacao_token varchar(200),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    primary key(organizacao_id)
);


CREATE TABLE entrega (
    entrega_id INT PRIMARY KEY,
    entrega_name VARCHAR(255),
    entrega_loc VARCHAR(255)
);

