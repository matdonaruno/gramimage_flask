from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
from flask import url_for


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

