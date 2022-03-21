FROM python:3.10

WORKDIR /app

EXPOSE 5050

COPY . ./

RUN pip install -r requirements.txt

CMD ["python", "main.py"]