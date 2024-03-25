from flask import Flask, render_template, url_for, redirect
from flask import Flask, request
from werkzeug.utils import secure_filename
import os



# Please note that the database and MYSQL code that is in this is mainly for my convience to help me test out interactions with a MYSQL Database without too much of a headache.
app = Flask(__name__)
app.static_folder = 'static'
app.static_url_path = '/static'
app = Flask(__name__, static_url_path='/static')

UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Define the allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


def allowed_file(filename):
    """Check if a file has an allowed extension"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS




@app.route('/')
def index():
    return render_template('index.html')


@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login-page.html')


# Labeler Page
@app.route("/labeler")
def labeler():
    return render_template("labeler.html")

# Researcher Home Page
@app.route("/researcher-home")
def researcher_home():
    return render_template("researcher-home.html")

# User Home Page
@app.route("/user-home")
def user_home():
    return render_template("user-Home.html")

# User Page
@app.route("/user-page")
def user_page():
    return render_template("user-page.html")

# Tagging Page
@app.route('/tags')
def viewTags():
    return  render_template('viewTags.html')

# Researching viewing Page
@app.route('/researchView')
def researchView():
    return  render_template('ResearcherView.html')

@app.route('/upload')
def upload():
    return render_template('upload-Page.html')
@app.route('/download')
def download():
    return  render_template('download-page.html')

@app.route('/singlelabeler')
def single_labeler():
    return render_template('single-labeler.html')

if __name__ == '__main__':
    app.run(debug=True)
