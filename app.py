from flask import Flask, request, render_template
import os

app = Flask(__name__)

# Ensure the folder for storing data exists
if not os.path.exists('data_folder'):
    os.makedirs('data_folder')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    contact = request.form['contact']
    email = request.form['email']
    rate = request.form['rate']
    feedback = request.form['feedback']
    
    # Save the data to a file in the data_folder
    with open(os.path.join('data_folder', 'user_data.txt'), 'a') as f:
        f.write(f"Name: {name}\nContact: {contact}\nEmail: {email}\nRate: {rate}\nFeedback: {feedback}\n\n")
    
    return "Data submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)
