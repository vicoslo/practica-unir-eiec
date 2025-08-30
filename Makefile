# Define la variable para el nombre del script de Python
PYTHON_SCRIPT = login_app.py

# Objetivo principal: ejecutar la aplicacion de login
run:
	@echo "Ejecutando la aplicacion de login..."
	@python3 $(PYTHON_SCRIPT)

# Objetivo de limpieza opcional
clean:
	@echo "No hay archivos para limpiar en este proyecto."

.PHONY: run clean
