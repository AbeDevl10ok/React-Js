# REDUX
- Mucho boilerplate.
- Pesa mas.
- Mucho codigo.
- Muchos conceptos.
+ Inmutabilidad por defecto.

-- Lo usaria para proyectos medianos pero tampoco muy grandes
(Proyecto grandes como faccebook netflix) -> APOLlO ,RELAY.

# ZUSTAND
+ Muy simple que no tiene ni PROVIDER.
+ Sin configuraciones.
+ Pesa muy poco.
- Hay que usar mutabilidad.

-- Lo usaria siempre que pueda.
-- No lo usaria para app muy grandes y para todo es estado global.

# REACT CONTEXT
-- Lo usaria para cosas que cambian poco o nada.
-- Evitar el prop drilling.
(El estado de un usuario, tema web(oscuro,claro))