from enum import Enum
#enum para pelotas
class Pelota (Enum):
    ROJO = 1
    VERDE = 2
    NEGRO = 3
    AZUL = 4

class Sentido (Enum):
    NORTE = 1
    ESTE = 2
    SUR = 3
    OESTE = 4


tablero = [
    [[],[],[], []],
    [[],[],[], []]
]



#posición inicial
posicion_sur_norte = 0
posicion_este_oeste = 0

def mover(sentido):
    global posicion_este_oeste, posicion_sur_norte
   
    if sentido == Sentido.NORTE:
        posicion_sur_norte = posicion_sur_norte + 1
    if sentido == Sentido.ESTE:
        posicion_este_oeste = posicion_este_oeste + 1
    if sentido == Sentido.SUR:
        posicion_sur_norte = posicion_sur_norte - 1
    if sentido == Sentido.OESTE:
        posicion_este_oeste = posicion_este_oeste -1


def mover_este():
    global posicion_este_oeste
    posicion_este_oeste = posicion_este_oeste + 1

def poner_pelota(pelota):
   tablero[posicion_sur_norte][posicion_este_oeste].append(pelota)



#solución. Aquí se escribiría la solución
# agregar el parámetro (Pelota.VERDE) a la función correspondiente
# Para moverse a la derecha agregar al parámetro (Sentido.Este) a la función mover().
poner_pelota(Pelota.VERDE)
mover(Sentido.ESTE)
poner_pelota(Pelota.VERDE)
mover(Sentido.ESTE)
poner_pelota(Pelota.VERDE)
mover(Sentido.ESTE)


# Para mostrar solución
print(tablero)


