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

@todo_routes.route('/', methods=['POST'])
def createToDo():
  data = request.get_json()
  print(data)
  userId = data['userId']
  dateDue = data['dueDate']
  typeId = data['typeId']
  item = data['item']


  if data['dueDate']:
    toDoDB = ToDo(
      userId=userId,
      typeId=typeId,
      item=item,
      dueDate=dateDue,
      # isComplete=False
    )
  else:
    toDoDB = ToDo(
      userId=userId,
      typeId=typeId,
      item=item,
      # isComplete=False
    )


  db.session.add(toDoDB)
  db.session.commit()
  return jsonify(toDo=data), 200
