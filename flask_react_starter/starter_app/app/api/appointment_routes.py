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
  categories = [appointment.categories.to_dict() for appointment in appointments]
  return { 'appointments': listAppts, 'categories': categories }

@appointment_routes.route('/', methods=['POST'])
def createNewAppt():
  data = request.get_json()

  category = data['category']
  userId = data['userId']
  date = data['date']
  time = data['time']
  notes = data['notes']

  newAppt = Appointment(

  )
