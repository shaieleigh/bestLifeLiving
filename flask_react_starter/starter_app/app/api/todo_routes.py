from flask import Blueprint, jsonify, request
from sqlalchemy.orm import joinedload, with_parent

from app.models import ToDoType, ToDo, db

todo_routes = Blueprint('todos', __name__)

@todo_routes.route('/')
def index():
  # todos = ToDo.query.options(joinedload('types'))
  todos = ToDo.query.join(ToDoType).all()
  todosList = [todo.to_dict() for todo in todos]
  todosTypes = [ todo.types.to_dict() for todo in todos]
  todosTypes2 = list({value['id']:value for value in todosTypes}.values())



  return { 'todos': todosList, 'types': todosTypes2 }
