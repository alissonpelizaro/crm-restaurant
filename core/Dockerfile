# syntax=docker/dockerfile:1
FROM python:3.7-alpine

WORKDIR /app

COPY . .
RUN pip install -r requirements.txt

RUN pytest

ENTRYPOINT [ "python" ]
CMD ["app.py"]

EXPOSE 5000