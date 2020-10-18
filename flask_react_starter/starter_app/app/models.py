from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.Binary(100), nullable=False, unique = True)
  appointments = db.relationship('Appointment', backref='users', lazy=True)
  todos = db.relationship('ToDo', backref='users', lazy=True)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      # "hashed_password": self.hashed_password,
    }

class AppointmentCategory(db.Model):
  __tablename__ = 'appointmentCategories'

  id = db.Column(db.Integer, primary_key = True)
  category = db.Column(db.String(25), nullable = False)

  def to_dict(self):
    return {
      'id': self.id,
      'category': self.category
    }


class Appointment(db.Model):
  __tablename__ = 'appointments'
#
  id = db.Column(db.Integer, primary_key = True)
  categoryId = db.Column(db.Integer, db.ForeignKey('appointmentCategories.id'), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  date = db.Column(db.Date, nullable=False)
  time = db.Column(db.Time, nullable=False)
  notes = db.Column(db.String(255), nullable=True)
  categories = db.relationship('AppointmentCategory', backref='appointments', lazy=True)

  def to_dict(self):
    return {
      'id': self.id,
      'categoryId': self.categoryId,
      'userId': self.userId,
      'date': self.date,
      'time': self.time,
      'notes': self.notes
    }

class ToDoType(db.Model):
  __tablename__ = 'toDoTypes'

  id = db.Column(db.Integer, primary_key = True)
  type = db.Column(db.String(25), nullable=False)

  def to_dict(self):
    return {
      'id': self.id,
      'type': self.type
    }

class ToDo(db.Model):
  __tablename__ = 'toDos'

  id = db.Column(db.Integer, primary_key = True)
  typeId = db.Column(db.Integer, db.ForeignKey('toDoTypes.id'), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  item = db.Column(db.String(255), nullable=False)
  dueDate = db.Column(db.Date, nullable=True)
  isComplete = db.Column(db.Boolean, default=False, nullable=False)
  types = db.relationship('ToDoType', backref='toDo', lazy=True)

  def to_dict(self):
    return {
      'id': self.id,
      'typeId': self.typeId,
      'userId': self.userId,
      'item': self.item,
      'dueDate': self.dueDate,
      'isComplete': self.isComplete
    }
