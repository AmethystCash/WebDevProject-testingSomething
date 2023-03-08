from flask import Flask, request, jsonify
import stockfish

app = Flask(__name__)
#sf = stockfish.Stockfish()

sf = stockfish.Stockfish(r'C:\Users\samki\Downloads\stockfish-11-win\stockfish-11-win\Windows\stockfish_20011801_x64.exe')

@app.route('/analyze', methods=['POST'])
def analyze_chess_game():
    data = request.form['chess-input']
    sf.set_fen_position(data)
    white_analysis = sf.get_best_move_time(1000)
    sf.set_fen_position(data, is_black=True)
    black_analysis = sf.get_best_move_time(1000)
    return jsonify({'white': white_analysis, 'black': black_analysis})

if __name__ == '__main__':
    app.run()