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


tablero[0][0].append(Pelota.ROJO)
tablero[0][0].append(Pelota.NEGRO)

print(tablero)