show databases;
use inventario;
show tables;
select * from productos;
select * from precio;
select * from tipos;
select * from moneda;

select pro.id, pro.nombre, descripcion, c.nombre as categoria, concat(simbolo," ", precio) as precio 
-- select *
from productos pro
join precio pre on pre.id = pro.precio_id
join moneda m on m.id = pre.moneda_id
join subcategoria s on s.id = pro.subcategoria_id
join categoria c on c.id = s.categoria_id
where m.id in (1,2)
and c.id != 6
order by m.id, pre.precio desc;


select * from subcategoria;
select * from categoria;

select s.nombre as subcategoria, c.nombre as categoria
from subcategoria s
join categoria c on s.categoria_id = c.id;

select * from moneda;

select concat (simbolo, " ", precio) as precio
from precio p
join moneda m on p.moneda_id =  m.id;

select * 
from proveedores p
join tipos t on  p.tipo_id = t.id;

select * from tipos; 

