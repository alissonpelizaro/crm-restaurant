from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def main():
    return dict(
        status = 200,
        data = 'Welcome to API'
    )

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')