from app import app

if __name__ == "__main__":
    app.run(port=8080, debug=True)
    # app.run(host="0.0.0.0", port=8080, debug=True)  # ポート番号やデバッグモードを必要に応じて設定してください
