from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User
from app.api.user_routes import set_password

hashed1 = set_password('password1')
hashed2 = set_password('password2')
hashed3 = set_password('password3')
hashed4 = set_password('password4')
hashed5 = set_password('password5')
hashed6 = set_password('password6')
hashed7 = set_password('password7')
hashed8 = set_password('password8')
hashed9 = set_password('password9')

with app.app_context():
  # db.drop_all()
  db.create_all()

  ian = User(username = 'Ian', email = 'ian@aa.io', hashed_password=hashed1)
  javier = User(username = 'Javier', email = 'javier@aa.io', hashed_password=hashed2)
  dean = User(username = 'Dean', email = 'dean@aa.io', hashed_password=hashed3)
  angela = User(username = 'Angela', email = 'angela@aa.io', hashed_password=hashed4)
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io', hashed_password=hashed5)
  alissa = User(username = 'Alissa', email = 'alissa@aa.io', hashed_password=hashed6)
  mrAnderson = User(username='mranderson', email='Mr@Anderson.com', hashed_password=hashed7)
  mrSmith = User(username='mrsmith', email='Mr@Smith.com', hashed_password=hashed8)
  demouser = User(username='demouser', email='demo@user.org', hashed_password=hashed9)

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)
  db.session.add(mrAnderson)
  db.session.add(mrSmith)
  db.session.add(demouser)

  db.session.commit()
