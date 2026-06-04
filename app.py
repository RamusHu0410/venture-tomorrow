import os
from flask import Flask, render_template, request

app = Flask(__name__)

# This pulls the password from the environment, not hardcoded
MY_SECRET_PASSWORD = os.environ.get("ADMIN_PASSWORD")


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/join', methods=['POST'])
def join_team():
    name = request.form.get('name')
    email = request.form.get('email')
    role = request.form.get('role')

    # Appends the signup to a text file
    with open("signups.txt", "a") as file:
        file.write(f"Name: {name} | Email: {email} | Role: {role}\n")

    return f"<h3>Thanks for joining, {name}! We will reach out to {email} soon.</h3><a href='/'>Go Back</a>"


@app.route('/view-data')
def view_data():
    # Get the password from the URL
    provided_password = request.args.get('password')

    # 1. Check if the password is None (meaning it's missing)
    # 2. Check if the password doesn't match the environment variable
    if not provided_password or provided_password != MY_SECRET_PASSWORD:
        return "Access Denied. 🛑", 403

    # If we made it here, the password was provided AND it is correct
    try:
        with open("signups.txt", "r") as file:
            data = file.read()
        return f"<h1>Venture Tomorrow Signups</h1><pre>{data}</pre>"
    except FileNotFoundError:
        return "No signups yet!"


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)