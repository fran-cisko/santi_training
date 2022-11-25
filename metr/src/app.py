from flask import Flask
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
    # return str(output)
    return render_template("app.html", data = output)

@app.route("/")
def hello_world():
    return render_template("app.html")
