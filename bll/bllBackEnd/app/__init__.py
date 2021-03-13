import os
from flask import Flask, render_template, request, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_jwt_extended import JWTManager
from flask_login import LoginManager

from .models import db, User, AppointmentCategory, Appointment, ToDoType, ToDo
from .api.user_routes import user_routes
from .api.todo_routes import todo_routes
from .api.appointment_routes import appointment_routes

from .config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(todo_routes, url_prefix='/api/todos')
app.register_blueprint(appointment_routes, url_prefix='/api/appointments')
db.init_app(app)
Migrate(app, db)
login = LoginManager(app)

@login.user_loader #configs LoginManger to use load_user func to get employee objects from database
def load_user(id):
    return User.query.get(int(id))

## Application Security
jwt = JWTManager(app)
CORS(app)
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        )
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        print("favicon route_____")
        return app.send_static_file('bllFavicon.png')
    if path == 'bLLSplash.png':
        print("bLLSplash route_____")
        return app.send_static_file('bLLSplash.png')
    if path == 'bestLifeLivingPreview.png':
        print("bestLifeLivingPreview route_____")
        return app.send_static_file('bestLifeLivingPreview.png')
    print("index route_____")
    return app.send_static_file('index.html')
