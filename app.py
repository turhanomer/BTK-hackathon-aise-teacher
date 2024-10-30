from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# SQLite Veritabanı Konfigürasyonu
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Kullanıcı Modeli
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# Veritabanını oluştur
with app.app_context():
    db.create_all()

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Kullanıcı verilerini kontrol et
    if not username or not email or not password:
        return jsonify({'message': 'Lütfen tüm alanları doldurun.'}), 400

    # Email veya kullanıcı adı zaten mevcutsa hata ver
    if User.query.filter_by(email=email).first() or User.query.filter_by(username=username).first():
        return jsonify({'message': 'Kullanıcı adı veya email zaten kayıtlı.'}), 409

    # Yeni kullanıcıyı veritabanına kaydet
    new_user = User(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Kayıt başarılı!'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Gerekli alanların kontrolü
    if not email or not password:
        return jsonify({'message': 'Lütfen tüm alanları doldurun.'}), 400

    # Kullanıcıyı veritabanında ara
    user = User.query.filter_by(email=email).first()

    # Kullanıcı kontrolü ve şifre doğrulama
    if user and user.password == password:  # Gerçek uygulamada hash'lenmiş şifre kullanın!
        return jsonify({
            'message': 'Giriş başarılı!',
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email
            }
        }), 200
    else:
        return jsonify({'message': 'Email veya şifre hatalı.'}), 401

if __name__ == '__main__':
    app.run(debug=True)
