# syntax=docker/dockerfile:1
FROM python:3.7-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
ENV FLASK_DEBUG 1

COPY . .
RUN pip install -r requirements.txt

RUN pytest

ENTRYPOINT [ "python" ]
CMD ["app.py"]

EXPOSE 5000