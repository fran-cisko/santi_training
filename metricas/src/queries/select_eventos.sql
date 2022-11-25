select e.fecha, a.nombre as actividad, e.prioridad, t.nombre as turno, e.duracion, actividad_personalizada
from eventos e
join actividades a on a.id = e.actividad_id
join turnos t on t.id = e.turno_id;