from flask import Blueprint, jsonify, request
from datetime import datetime, time, date

from app.models import User, Appointment, AppointmentCategory, db

appointment_routes = Blueprint('appointments', __name__)

@appointment_routes.route('/')
def index():
  appointments = Appointment.query.join(AppointmentCategory).all()
  print(appointments)
  listAppts = [appointment.to_dict() for appointment in appointments]
  print(listAppts)
  for item in listAppts:
    timeDue = time.strftime(item['time'], '%H:%M')
    dateItem = item['date']
    dateDue = date.strftime(item['date'], '%w %m %d %Y')
    print(timeDue)
    item['time'] = timeDue
    item['date'] = dateDue
  apptCategories = AppointmentCategory.query.all()
  categories = [apptCategory.to_dict() for apptCategory in apptCategories]
  return { 'appointments': listAppts, 'categories': categories }

@appointment_routes.route('/', methods=['POST'])
def createNewAppt():
  data = request.get_json()

  print(data)
  dataTime = data['time']

  category = data['categoryId']
  userId = data['userId']
  date = data['date']
  # time2 = time.strftime(data['time'], '%H:%M')
  # time2 = datetime.strptime(data['time'], '%H:%M').time()
  time2 = data['time']
  notes = data['notes']

  apptDB = Appointment(
    categoryId=category,
    userId=userId,
    date=date,
    time=time2,
    notes=notes
  )

  db.session.add(apptDB)
  db.session.commit()

  appointmentDB = apptDB.to_dict()
  return jsonify(appointment=data), 200

@appointment_routes.route('/', methods=['PUT'])
def editAppt():
  data = request.get_json()
  print('DATA APPT PUT', data)
  id = data['apptId']
  appointment = Appointment.query.filter_by(id=id).all()
  appt = appointment[0]
  # appt = get_post(id)
  print('APPOINTMENT PUT-appointment', appointment)
  if data['date'] != '':
    dateE = data['date']
    db.session.execute('UPDATE appt SET date = dateE')
    db.session.commit()
  if data['time'] != '':
    timeE = data['time']
    db.session.execute('UPDATE appt SET time = timeE')
    db.session.commit()
  if data['categoryId'] != '':
    categoryIdE = data['categoryId']
    print('APPOINTMENT PITA', appointment)
    db.session.execute('UPDATE appointments SET "categoryId" = ' + str(categoryIdE) + ' WHERE id = ' + str(id) + ';')
    db.session.commit()

  if data['notes'] != '':
    notesE = data['notes']

    db.session.execute("UPDATE appointments SET notes='" + notesE + "' WHERE id = " + str(id) + ';')
    # setattr(appt, 'notes', notesE)
    db.session.commit()

  return jsonify(apptmnt=data), 200
