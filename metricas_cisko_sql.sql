show databases;
use metricas_cisko;
create table turnos(
	id int auto_increment primary key,
    nombre varchar(255) not null
);
create table actividades(
 id int auto_increment primary key,
 nombre varchar(255) not null
 );
create table eventos (
	id int auto_increment primary key,
    actividad_id int,
    actividad_personalizada varchar(255),
    prioridad int,
    fecha date not null,
    turno_id int,
    duracion int 
    
);
    
create table metricas_diarias (
	id int auto_increment primary key,
    fecha date not null,
    turno_id int,
    nivel_energia double not null,
    tristeza double not null
);
    

show tables;
select * from turnos;
select * from actividades;
select * from eventos;
select * from metricas_diarias;
describe actividades;
-- drop table turnos;
-- drop table actividades;
-- drop table eventos;

delete from turnos
where id > 4;

insert into turnos (nombre) values("morning");
insert into turnos (nombre) values("afternoon");
insert into turnos (nombre) values("evening");
insert into turnos (nombre) values("night");

describe turnos;
alter table turnos auto_increment=1;

insert into actividades (nombre) values
("Habits traking"),
("Work"),
("Wim Hof breathing"),
("Cool shower"),
("Nigth routine"),
("Dance");
update actividades
set nombre = "Habits tracking"
where id = 1;

describe eventos;
insert into eventos (fecha, actividad_personalizada, prioridad,turno_id)
values ("2022-09-16","almuerzo sociabilizante",1, 2);
insert into eventos (fecha,   actividad_id, prioridad,turno_id)
values ("2022-09-15",2,1,2 );

insert into metricas_diarias(fecha,turno_id,nivel_energia,tristeza)
values("2022-09-15", 2,5, 0);
