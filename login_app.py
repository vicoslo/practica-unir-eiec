import getpass

def login():
    """
    Simula un proceso de inicio de sesión.
    """
    # Credenciales de usuario predefinidas
    usuario_correcto = "admin"
    contrasena_correcta = "1234"

    # Solicitar nombre de usuario
    usuario = input("Ingrese su nombre de usuario: ")

    # Solicitar contraseña de forma segura (no se muestra en pantalla)
    contrasena = getpass.getpass("Ingrese su contrasena: ")

    # Verificar credenciales
    if usuario == usuario_correcto and contrasena == contrasena_correcta:
        print("¡Inicio de sesion exitoso! Bienvenido, {}.".format(usuario))
        return True
    else:
        print("Error: Nombre de usuario o contrasena incorrectos.")
        return False

if __name__ == "__main__":
    login()
