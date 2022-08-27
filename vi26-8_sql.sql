show databases;
use inventario;
select * from categoria;
show tables;
-- select p.id,p.nombre as producto,descripcion,s.nombre as subcategoria, c.nombre as categoria from productos p
select count(*), c.nombre from productos p
join subcategoria s
on p.subcategoria_id = s.id
join categoria c
on c.id = s.categoria_id
group by c.nombre;

select * from productos;
select * from proveedores;
select * from subcategoria;
select * from precio; -- precio.precio
select * from moneda;-- moneda.simbolo
describe productos;

insert into productos (nombre, descripcion, subcategoria_id, proveedor_id, precio_id)
values ("optimus pride", "auto-robot", 5, 7, 2);

select p.id, p.nombre as producto, p.descripcion, s.nombre as subcategoria, concat(pv.nombre," ",  pv.apellido) as proveedor, concat(m.simbolo, " ", pc.precio) as precio from productos p
join subcategoria s
on s.id = p.subcategoria_id
join proveedores pv
on pv.id = p.proveedor_id
join precio pc
on pc.id = p.precio_id
join moneda m
on pc.moneda_id = m.id;

insert into precio (precio, moneda_id)
values (1500, 2);

-- actualizar un dato en un campo
update productos
set precio_id = 41
where id = 24;
