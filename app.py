from flask import Flask, request, jsonify
from stockfish import Stockfish
from io import StringIO
import chess
import chess.pgn
import sys


app = Flask(__name__)
#sf = stockfish.Stockfish()

sf = Stockfish(r'C:\\Users\\samki\\Downloads\\stockfish-11-win\\stockfish-11-win\\Windows\\stockfish_20011801_x64.exe')

@app.route('/analyze', methods=['POST'])
def analyze_chess_game():

    data = request.form['chess-input']
    
    pgn = StringIO(data)
    game = chess.pgn.read_game(pgn)
    game = game.end()
    board = game.board()

    sf.set_fen_position(board.fen())
    best_move = sf.get_best_move()

    return jsonify({'BestMove' : best_move})

if __name__ == '__main__':
    app.run()