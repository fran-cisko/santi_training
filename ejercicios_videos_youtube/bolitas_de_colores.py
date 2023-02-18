from enum import Enum
#enum para pelotas
class Pelota (Enum):
    ROJO = 1
    VERDE = 2
    NEGRO = 3
    AZUL = 4


tablero = [
    [[],[]],
    [[],[]]
]

celda0 = tablero[0][0]
#solución. Aquí se escribiría la solución
tablero[0][0].append(Pelota.ROJO)
tablero[0][0].append(Pelota.NEGRO)
tablero[0][0].append(Pelota.VERDE)
celda0.append(Pelota.AZUL)

# Para mostrar solución
for bolita in tablero[0][0]:
    print(bolita)

# Pelota.Rojo , Pelota.Negro, Pelota.VERDE, Pelota.AZUL
# Para agregar un elemento al tablero puede utilizar la siguiente expresión: tablero[0][0].append(Pelota.NEGRO)