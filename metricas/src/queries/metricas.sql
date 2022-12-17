 select md.nivel_energia, md.fecha, t.nombre as turno, e.actividad_personalizada, e.prioridad, e.duracion, a.nombre
 from metricas_diarias md
 join turnos t on md.turno_id = t.id
 left join eventos e  on t.id= e.turno_id and md.fecha = e.fecha
 left join actividades a on a.id= e.actividad_id
 order by fecha desc, prioridad asc;