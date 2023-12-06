import sys
import json
import numpy as np
from scipy.integrate import solve_ivp

def solve_equation(equation, t_span, y0):
    # Définir une fonction qui représente l'équation différentielle
    # Vous devez adapter cette partie pour correspondre au format de votre équation
    def func(t, y):
        return eval(equation)

    # Résoudre l'équation différentielle
    sol = solve_ivp(func, t_span, y0, t_eval=np.linspace(t_span[0], t_span[1], 100))

    return sol.t, sol.y[0]

# Lecture des arguments depuis Node.js
args = json.loads(sys.argv[1])

# Extraction des paramètres
equation = args['equation']  # L'équation sous forme de chaîne
initial_condition = float(args['initial_conditions'][0])  # Condition initiale
t_span = [float(args['t_span'][0]), float(args['t_span'][1])]  # Plage de temps

# Résolution de l'équation
t, y = solve_equation(equation, t_span, [initial_condition])

# Envoi des résultats sous forme de JSON
print(json.dumps({'t': t.tolist(), 'y': y.tolist()}))
