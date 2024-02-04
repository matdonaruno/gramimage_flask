# ベースイメージとしてPythonの公式イメージを使用
FROM python:3.11

# 作業ディレクトリを設定
WORKDIR /app

# 必要なPythonパッケージをインストール
# FlaskとWerkzeugが必要ですが、他に依存パッケージがあれば追加してください
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのソースコードをコンテナにコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# コンテナ起動時にFlaskアプリケーションを起動
CMD ["python", "./run.py"]
