from flask import Blueprint, jsonify, request

from app.models import User, ToDo, db

todo_routes = Blueprint('todos', __name__)

@todo_routes.route('/')
def index():
  todos = ToDo.query.all()
  print(todos)
  return { "todos": [todo.to_dict() for todo in todos]}
