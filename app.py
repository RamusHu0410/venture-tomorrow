import os
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    # This serves your actual HTML website
    return render_template('index.html')


@app.route('/join', methods=['POST'])
def join_team():
    # This safely captures the data when someone fills out your form
    name = request.form.get('name')
    email = request.form.get('email')
    role = request.form.get('role')

    # In the future, you can save this to a database or Google Sheets.
    # For now, we will print it to your server logs.
    print(f"NEW SIGNUP -> Name: {name} | Email: {email} | Role: {role}")

    return f"<h3>Thanks for joining, {name}! We will reach out to {email} soon.</h3><a href='/'>Go Back</a>"


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)