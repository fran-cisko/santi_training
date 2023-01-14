from flask import Flask, request
from flask import render_template
from flask_mysql_connector import MySQL

app = Flask(__name__)
app.config['MYSQL_USER'] = 'cisko'
app.config['MYSQL_PASSWORD'] = '123457'
app.config['MYSQL_DATABASE'] = 'metricas_cisko'
mysql = MySQL(app)

EXAMPLE_SQL = "select * from metricas_diarias"

@app.route('/connection')
def connection():
    conn = mysql.connection
    cur = conn.cursor()
    cur.execute(EXAMPLE_SQL)
    output = cur.fetchall()
    return output


@app.route("/")
def hello_world():
    return render_template('app.html')


@app.route('/evento/<date>')
def evento(date):
    f = open("./queries/eventos_date.sql","r")
    query_array = f.readlines()
    query_posta = " ".join(query_array)
    conn = mysql.connection
    cur = conn.cursor(dictionary=True)
    cur.execute(query_posta, ([date]))
    output = cur.fetchall()
    return output
# /home/cisko/santi_training/metricas/src/app.py

@app.route('/ultimos-eventos')
def ultimos_eventos():
    f = open("./queries/select_eventos.sql","r")
    query_array = f.readlines()
    query_posta = " ".join(query_array)
    conn = mysql.connection
    cur = conn.cursor(dictionary=True)
    cur.execute(query_posta)
    output = cur.fetchall()
    return output

@app.route('/metricas')
def metricas():
    f = open("./queries/metricas.sql","r")
    query_array = f.readlines()
    query_posta = " ".join(query_array)
    conn = mysql.connection
    cur = conn.cursor(dictionary=True)
    cur.execute(query_posta)
    output = cur.fetchall()
    return output
# methods=['GET', 'POST'])


@app.route('/metricas-insert', methods=['GET','POST'])
def metricas_insert():
    f = open("./queries/metricas_insert.sql","r")

    '''
    fecha = request.form['fecha']
    turno_id = request.form['turno_id']
    nivel_energia= request.form['nivel_energia']
    '''

    fecha = request.form.get('fecha')
    turno_id = request.form.get('turno_id')
    nivel_energia = request.form.get('nivel_energia')

    print(fecha)
    print(turno_id)
    print(nivel_energia)

    query_array = f.readlines()
    query_posta = " ".join(query_array)
    conn = mysql.connection
    cur = conn.cursor(dictionary=True)
    cur.execute(query_posta,([fecha,turno_id,nivel_energia]))
    conn.commit()
    print('inertó en la base de datos')
    output = cur.fetchall()
    return output

''' ejemplo de endpoint hardcodeado

@app.route('/ultimos-eventos-2')
def ultimos_eventos_2():
    return [
        {
            "id": 1,
            "actividad": "pesas",
            "prioridad": 3,
            "turno": "tarde",
            "date": "01/10/2022",
            "personaliza": False,
            "duracion" : 1
        },
        {
            "id": 2,
            "actividad": "rezar a Juan el Cartero",
            "prioridad": 4,
            "turno": "noche",
            "date": "04/10/2022",
            "personaliza": False,
            "duracion" : 0.5
        },
        {
            "id": 3,
            "actividad": "baile",
            "prioridad": 2,
            "turno": "mañana",
            "date": "04/10/2022",
            "personaliza": False,
            "duracion" : 2
        }
    ]

    '''