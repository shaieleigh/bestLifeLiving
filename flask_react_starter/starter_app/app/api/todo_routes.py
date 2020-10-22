from flask import Blueprint, jsonify, request
from sqlalchemy.orm import joinedload, with_parent

from app.models import ToDoType, ToDo, db

todo_routes = Blueprint('todos', __name__)

@todo_routes.route('/')
def index():  
  # todos = ToDo.query.options(joinedload('types'))
  todos = ToDo.query.join(ToDoType).all()
  todosList = [todo.to_dict() for todo in todos]
  todosTypesId = [todo.types.to_dict() for todo in todos]
  todosTypesIds = list({value['id']:value for value in todosTypesId}.values())
  typesList = ToDoType.query.all()
  typesList2 = [typeList.to_dict() for typeList in typesList]


  return { 'todos': todosList, 'types': todosTypesIds, 'types2': typesList2 }
