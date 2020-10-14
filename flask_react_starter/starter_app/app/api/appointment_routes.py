from flask import Blueprint, jsonify, request
from datetime import datetime, time, date

from app.models import User, Appointment, db

appointment_routes = Blueprint('appointments', __name__)

@appointment_routes.route('/')
def index():
  appointments = Appointment.query.all()
  print(appointments)
  listAppts = { "appointments": [appointment.to_dict() for appointment in appointments]}
  print(listAppts)
  for item in listAppts['appointments']:
    timeDue = time.strftime(item['time'], '%H:%M')
    dateDue = date.strftime(item['date'], '%D %M %D %Y')
    print(timeDue)
    item['time'] = timeDue
    item['date'] = dateDue
  return listAppts
