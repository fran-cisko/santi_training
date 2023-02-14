ingreso_nombre = input("Ingrese su primer nombre ---> ")

'''

def mostrar_nombre_corto(nombre):
    mensaje_personalizado = println(f"Tu nombre {nombre} es corto" )


def mostrar_nombre_largo(nombre):
    mensaje_personalizado = println(f"Tu nombre {nombre} es largo" )
'''
    
def mensaje_personalizado(nombre):
    if len(nombre) <= 5:
        print(f"Tu nombre {nombre} es corto")
        return
    print(f"Tu nombre {nombre} es largo")

mensaje_personalizado(ingreso_nombre)
